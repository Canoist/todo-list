import { useState } from "react";
import "./App.css";
import TaskDesc from "./components/taskDesc";
import TaskList from "./components/taskList";
import AddTask from "./components/ui/addTask";

function App() {
    const [data, setData] = useState([]);
    const [currentTask, setCurrentTask] = useState();

    const [searchedTasks, setSearchedTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function resetFields() {
        setInputValue("");
        setSearchedTasks([]);
    }

    const handleAddTask = (data) => {
        setData((prev) => [...prev, data]);
        resetFields();
    };

    const handleChange = (incData) => {
        const newData = [...data];
        const index = newData.findIndex((task) => task._id === incData._id);
        if (index >= 0) {
            newData[index] = incData;
            setData(() => newData);
        }
        const value = inputValue.trim().toLowerCase();
        if (incData.name.toLowerCase().includes(value)) {
            updateList(newData);
        } else {
            resetFields();
        }
        setCurrentTask();
    };

    const updateList = (incData) => {
        const value = inputValue.trim().toLowerCase();
        setSearchedTasks(() => {
            return value.length > 0
                ? incData.filter((task) =>
                      task.name.toLowerCase().includes(value)
                  )
                : incData;
        });
    };

    const handleSelectTask = (id) => {
        setCurrentTask(...data.filter((task) => task._id === Number(id)));
    };

    const handleSearch = ({ target }) => {
        const value = target.value.trim().toLowerCase();
        setInputValue(target.value);
        setSearchedTasks(
            value.length > 0
                ? data.filter((task) => task.name.toLowerCase().includes(value))
                : data
        );
    };

    const handleDelete = (id) => {
        setData((prev) => {
            const newFilter = prev.filter((task) => task._id !== id);
            updateList(newFilter);
            return newFilter;
        });
        setCurrentTask();
    };

    const filteredTasks = searchedTasks.length
        ? searchedTasks
        : inputValue
        ? []
        : data;

    return (
        <div className="wrapper">
            <div className="content">
                <div className="header-content">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        onChange={handleSearch}
                        value={inputValue}
                    />
                    <AddTask onAdd={handleAddTask} />
                </div>
                <div>
                    <div className="flex-nowrap">
                        {!!data.length && (
                            <TaskList
                                taskList={filteredTasks}
                                currentTask={currentTask}
                                setCurrent={handleSelectTask}
                            />
                        )}
                        <span className="handler-resize"></span>
                        {currentTask ? (
                            <TaskDesc
                                currentTask={currentTask}
                                onChange={handleChange}
                                onDelete={handleDelete}
                            />
                        ) : (
                            !!data.length && (
                                <p style={{ margin: "0.5rem" }}>
                                    Выберете задачу из списка
                                </p>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

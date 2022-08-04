import { useState } from "react";
import "./App.css";
import TaskDesc from "./components/taskDesc";
import TaskList from "./components/taskList";
import AddTask from "./components/ui/addTask";

function App() {
    const [data, setData] = useState([]);
    const [currentTask, setCurrentTask] = useState();

    // const [searchedTasks, setSearchedTasks] = useState();
    // const [inputValue, setInputValue] = useState("");

    const handleAddTask = (data) => {
        setData((prev) => [...prev, data]);
    };

    const handleChange = (incData) => {
        const newData = [...data];
        const index = newData.findIndex((task) => task._id === incData._id);
        if (index >= 0) {
            newData[index] = incData;
            setData(newData);
        }
    };

    const handleSelectTask = (id) => {
        setCurrentTask(...data.filter((task) => task._id === Number(id)));
    };
    // const handleSearch = (event) => {
    //     const value = event.target.value.trim().toLowerCase();
    //     setInputValue(event.target.value);
    //     setSearchedTasks(
    //         value.length > 0
    //             ? data.filter((task) => task.name.toLowerCase().includes(value))
    //             : data
    //     );
    // };

    const handleDelete = (id) => {
        setData((prev) => prev.filter((task) => task._id !== id));
        setCurrentTask();
    };

    return (
        <div>
            {/* <input
                type="text"
                className="form-control"
                placeholder="Search..."
                onChange={handleSearch}
                value={inputValue}
            /> */}
            <AddTask onAdd={handleAddTask} />
            {!!data.length && (
                <TaskList
                    taskList={data}
                    currentTask={currentTask}
                    setCurrent={handleSelectTask}
                />
            )}
            {currentTask && (
                <TaskDesc
                    currentTask={currentTask}
                    onChange={handleChange}
                    onDelete={handleDelete}
                />
            )}
        </div>
    );
}

export default App;

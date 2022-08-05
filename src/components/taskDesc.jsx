import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const optionsArray = [
    { name: "Ожидание", value: "wait" },
    { name: "В процессе", value: "atWork" },
    { name: "Выполнена", value: "done" },
];

const TaskDesc = ({ currentTask, onChange, onDelete }) => {
    const [inputName, setInputName] = useState(currentTask.name);
    const [status, setStatus] = useState(currentTask.status);

    useEffect(() => {
        setStatus(currentTask.status);
    }, [currentTask]);

    useEffect(() => {
        setInputName(currentTask.name);
    }, [currentTask.name]);

    const handleChange = (e) => {
        const { value } = e.target;
        setInputName(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onChange({ name: inputName, _id: currentTask._id, status: status });
    };

    return (
        <form
            style={{ margin: "0.5rem", flex: "1 1 auto" }}
            onSubmit={handleSubmit}>
            <label htmlFor="taskName" className="form-label">
                Название задачи
            </label>
            <textarea
                id="taskName"
                type="text"
                className="form-control"
                placeholder="name"
                onChange={handleChange}
                value={inputName}
                rows={3}
                style={{ width: "100%" }}
            />
            <select
                className="select"
                value={status}
                onChange={({ target }) => {
                    setStatus(target.value);
                }}>
                <option disabled value="">
                    Статус
                </option>
                {optionsArray &&
                    optionsArray.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.name}
                        </option>
                    ))}
            </select>
            <div className="flex-end">
                <button
                    className="btn btn-primary"
                    type="button"
                    style={{ marginRight: "0.5rem" }}
                    onClick={handleSubmit}>
                    Сохранить
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => {
                        onDelete(currentTask._id);
                    }}>
                    Delete
                </button>
            </div>
        </form>
    );
};

TaskDesc.propTypes = {
    currentTask: PropTypes.object,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
};

export default TaskDesc;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const TaskDesc = ({ currentTask, onChange, onDelete }) => {
    const [inputName, setInputName] = useState(currentTask.name);

    useEffect(() => {
        setInputName(currentTask.name);
    }, [currentTask.name]);

    const handleChange = (e) => {
        const { value } = e.target;
        setInputName(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onChange({ name: inputName, _id: currentTask._id });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="taskName" className="form-label">
                    Название задачи
                </label>
                <input
                    id="taskName"
                    type="text"
                    className="form-control"
                    placeholder="name"
                    onChange={handleChange}
                    value={inputName}
                />
                <button type="submit" onClick={handleSubmit}>
                    Сохранить
                </button>
            </form>
            <button
                onClick={() => {
                    onDelete(currentTask._id);
                }}>
                Delete
            </button>
        </div>
    );
};

TaskDesc.propTypes = {
    currentTask: PropTypes.object,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
};

export default TaskDesc;

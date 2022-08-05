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

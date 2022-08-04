import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTask = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd({ name: inputValue, _id: Date.now() });
    };
    const handleChange = (e) => {
        const { value } = e.target;
        setInputValue(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-control"
                placeholder="Add task..."
                onChange={handleChange}
                value={inputValue}
            />
            <button type="submit" onClick={handleSubmit}>
                Создать задачу
            </button>
        </form>
    );
};

AddTask.propTypes = {
    onAdd: PropTypes.func,
};

export default AddTask;

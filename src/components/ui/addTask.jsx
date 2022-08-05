import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTask = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd({ name: inputValue, _id: Date.now() });
        setInputValue("");
    };
    const handleChange = (e) => {
        const { value } = e.target;
        setInputValue(value);
    };

    return (
        <form className="" onSubmit={handleSubmit}>
            <textarea
                className="form-control"
                placeholder="Add task..."
                onChange={handleChange}
                value={inputValue}
                rows="3"
            />
            <button
                className="btn btn-success"
                type="submit"
                onClick={handleSubmit}>
                Создать задачу
            </button>
        </form>
    );
};

AddTask.propTypes = {
    onAdd: PropTypes.func,
};

export default AddTask;

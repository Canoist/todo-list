import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTask = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd({ name: inputValue, _id: Date.now(), status: "wait" });
        setInputValue("");
    };
    const handleChange = (e) => {
        const { value } = e.target;
        setInputValue(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Добавить задачу..."
                    onChange={handleChange}
                    value={inputValue}
                    aria-describedby="button-addon2"
                />
                <button
                    className="btn btn-success"
                    type="button"
                    id="button-addon2"
                    onClick={handleSubmit}>
                    Создать задачу
                </button>
            </div>
        </form>
    );
};

AddTask.propTypes = {
    onAdd: PropTypes.func,
};

export default AddTask;

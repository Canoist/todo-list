import React from "react";
import PropTypes from "prop-types";

const TaskList = ({ currentTask, taskList, setCurrent }) => {
    const handleClick = ({ target }) => {
        setCurrent(target.id);
    };

    return (
        <ol>
            {taskList.map((task) => (
                <li
                    key={task._id}
                    id={task._id}
                    className={currentTask === task._id ? "active" : ""}
                    onClick={handleClick}>
                    {task.name}
                </li>
            ))}
        </ol>
    );
};

TaskList.propTypes = {
    currentTask: PropTypes.object,
    taskList: PropTypes.array,
    setCurrent: PropTypes.func,
};

export default TaskList;

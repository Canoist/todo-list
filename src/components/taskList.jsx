import React from "react";
import PropTypes from "prop-types";

const TaskList = ({ currentTask, taskList, setCurrent }) => {
    const handleClick = ({ target }) => {
        setCurrent(target.id);
    };
    // console.log(currentTask);
    return (
        <div className="list-group-wrapper">
            <ol className="list-group list-group-numbered">
                {taskList.map((task) => (
                    <li
                        key={task._id}
                        id={task._id}
                        className={
                            "list-group-item " +
                            (currentTask?._id === task._id ? "active" : "")
                        }
                        onClick={handleClick}>
                        <span
                            className={
                                "badge " +
                                (task.status === "wait"
                                    ? "badge-wait"
                                    : task.status === "atWork"
                                    ? "badge-at-work"
                                    : task.status === "done"
                                    ? "badge-done"
                                    : "")
                            }>
                            <span className="hidden-badge">Hidden</span>
                        </span>
                        {task.name}
                    </li>
                ))}
            </ol>
        </div>
    );
};

TaskList.propTypes = {
    currentTask: PropTypes.object,
    taskList: PropTypes.array,
    setCurrent: PropTypes.func,
};

export default TaskList;

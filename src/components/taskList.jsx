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
                                "badge " + currentTask?.status === "wait"
                                    ? "badge-wait"
                                    : currentTask?.status === "atWork"
                                    ? "badge-at-work"
                                    : currentTask?.status === "done"
                                    ? "badge-done"
                                    : ""
                            }
                        />
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

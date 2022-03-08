import React from "react";

const TodoList = (props) => {
  const handleDelete = ({ id }) => {
    props.setTasks(props.tasks.filter((task) => task.id !== id));
  };
  const handleCompleted = (task) => {
    props.setTasks(
      props.tasks.map((item) => {
        if (item.id === task.id) {
          return { ...item, complete: !item.complete };
        }
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTask = props.tasks.find((task) => task.id === id);
    props.setEditTask(findTask);
  };
  return (
    <div>
      {props.tasks.map((task) => (
        <li className="list-item" key={task.id}>
          <input
            type="text"
            value={task.title}
            className={`list ${task.complete ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleCompleted(task)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(task)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(task)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;

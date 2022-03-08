import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const onInputChangeHandler = (event) => {
    props.setInput(event.target.value);
  };

  const updateTask = (title, id, complete) => {
    const newTask = props.tasks.map((task) =>
      task.id === id ? { title, id, complete } : task
    );
    props.setTasks(newTask);
    props.setEditTask("");
  };

  useEffect(() => {
    if (props.editTask) {
      props.setInput(props.editTask.title);
    } else {
      props.setInput("");
    }
  }, [props.setInput, props.editTask]);

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    if (!props.editTask) {
      props.setTasks([
        ...props.tasks,
        { id: uuidv4(), title: props.input, complete: false },
      ]);
      props.setInput("");
    } else {
      updateTask(props.input, props.editTask.id, props.editTask.complete);
    }
  };

  return (
    <form onSubmit={onFormSubmitHandler}>
      <input
        type="text"
        placeholder="Enter a Task"
        className="task-input"
        value={props.input}
        required
        onChange={onInputChangeHandler}
      />
      <button className="button-add" type="submit">
        {props.editTask ? "OK" : "ADD"}
      </button>
    </form>
  );
};

export default Form;

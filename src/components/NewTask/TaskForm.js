import { useRef, useState } from "react";

import classes from "./TaskForm.module.css";

const TaskForm = (props) => {
  const taskInputRef = useRef();
  const [taskInput, setTaskInput] = useState("");

  const taskInputHandler = (event) => {
    setTaskInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
    setTaskInput("");
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        type="text"
        value={taskInput}
        onChange={taskInputHandler}
        ref={taskInputRef}
      />
      <button>{props.loading ? "Sending..." : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;

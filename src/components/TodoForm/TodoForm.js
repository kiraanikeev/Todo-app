import React, { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm(props) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(task);

    setTask("");
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>TODO LIST</h1>
      <form className={styles.form} action="#" onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="What do you need to do?"
          required
          minLength={2}
          maxLength={31}
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button className={styles.button} type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;

import { TaskList } from "./components/TaskList";
import { Field } from "../src/components/Field";
import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState([
    { id: 1, title: "first", isCompleted: false },
  ]);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const addToList = () => {
    //immutability principle
    //it's wrong to change (=mutate) the initial array, we need to create a new array and rewrite the data
    const newList = [
      ...taskList,
      { id: taskList.length + 1, title: inputValue, isCompleted: false },
    ];
    setTaskList(newList);
    setInputValue("");
    // console.log(taskList)
  };

  const deleteTask = (taskId) => {
    const newList = taskList.filter((task) => task.id !== taskId);
    setTaskList(newList);
  };

  const handleTaskComplete = (taskId, isCompleted) => {
    setTaskList(
      taskList.map((task) =>
        task.id === taskId ? { ...task, isCompleted } : task
      )
    );
  };

  return (
    <div
      className="App"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Field
        handleInput={handleInput}
        addToList={addToList}
        value={inputValue}
      />
      <TaskList
        taskList={taskList}
        deleteTask={deleteTask}
        handleTaskComplete={handleTaskComplete}
      />
    </div>
  );
}

export default App;

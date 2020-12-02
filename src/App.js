import { TaskList } from "./components/TaskList";
import { Field } from "../src/components/Field";
import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const addToList = () => {
    //immutability principle
    //it's wrong to change (=mutate) the initial array, we need to create a new array and rewrite the data
    const newList = [...taskList, inputValue];
    setTaskList(newList);
    setInputValue("");
    // console.log(taskList)
  };

  const deleteTask = (taskToDelete) => {
    const newList = taskList.filter((task) => task !== taskToDelete);
    setTaskList(newList);
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
      <TaskList taskList={taskList} deleteTask={deleteTask} />
    </div>
  );
}

export default App;

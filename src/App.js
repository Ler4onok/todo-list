import { TaskList } from "./components/TaskList";
import { Field } from "./components/Field";
import { Modal } from "./components/Modal";
import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState([
    { id: 1, title: "first", isCompleted: false },
  ]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteConfirmed, setDeleteConfirmed] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(0);

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
    setTaskToDelete(taskId);
    setModalOpen(true);
  };

  const handleTaskComplete = (taskId, isCompleted) => {
    setTaskList(
      taskList.map((task) =>
        task.id === taskId ? { ...task, isCompleted } : task
      )
    );
  };

  const closeModal = () => {
    console.log("close");
    setModalOpen(false);
  };

  const confirmDelete = () => {
    const newList = taskList.filter((task) => task.id !== taskToDelete);
    setTaskList(newList);
    setDeleteConfirmed(false);
    setModalOpen(false);
  };

  return (
    <div
      className="App"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "150px",
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
      {console.log(isDeleteConfirmed)}
      {isModalOpen && (
        <Modal closeModal={closeModal} confirmDelete={confirmDelete} />
      )}
    </div>
  );
}

export default App;

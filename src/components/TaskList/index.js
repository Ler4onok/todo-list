import React, { useState, memo } from "react";
import { StyledTask, StyledContainer } from "./styled";
// import {Task} from '../Task'

const TaskListRender = ({ taskList, deleteTask }) => {
  console.log("tsk" + taskList);
  return (
    <div>
      {taskList.map((task) => {
        return (
          <StyledTask>
            <StyledContainer>
              <label style={{ fontSize: "18px" }}>{task}</label>
              {/* callback function to call the function onclick */}
              <p onClick={() => deleteTask(task)}>x</p>
            </StyledContainer>
          </StyledTask>
        );
      })}
    </div>
  );
};

//memo is used not to rerender the component in case of the same props reference and value
export const TaskList = memo(TaskListRender);

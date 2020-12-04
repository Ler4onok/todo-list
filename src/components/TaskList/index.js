import React, { useState, memo } from "react";
import { StyledTask, StyledContainer, DeleteIcon, StyledLabel } from "./styled";
import Checkbox from "@material-ui/core/Checkbox";
// import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";

// import {Task} from '../Task'

const TaskListRender = ({ taskList, deleteTask, handleTaskComplete }) => {
  return (
    <div>
      {taskList.map((task) => {
        return (
          <StyledTask
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StyledContainer>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                  checked={task.isCompleted}
                  onChange={({ target }) =>
                    handleTaskComplete(task.id, target.checked)
                  }
                />
                <StyledLabel isCompleted={task.isCompleted}>
                  {task.title}
                </StyledLabel>
              </div>
              {/* callback function to call the function onclick */}
              <DeleteIcon
                style={{ height: "10px", width: "10px" }}
                onClick={() => deleteTask(task.id)}
              />
            </StyledContainer>
          </StyledTask>
        );
      })}
    </div>
  );
};

//memo is used not to rerender the component in case of the same props reference and value
export const TaskList = memo(TaskListRender);

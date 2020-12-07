import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Field = ({ handleInput, addToList, value }) => {
  // console.log('inp' + value)

  return (
    <div>
      <div className="fieldContainer">
        <TextField
          id="textField"
          label="Write a task here"
          value={value}
          onChange={handleInput}
        />
        <Button variant="contained" color="primary" onClick={addToList}>
          Add
        </Button>
      </div>
    </div>
  );
};

export { Field };

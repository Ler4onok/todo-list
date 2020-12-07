import React from "react";
import Button from "@material-ui/core/Button";
import { StyledModal, ButtonBlock, ModalOverlay } from "./styled";

const Modal = ({ closeModal, confirmDelete }) => {
  return (
    <ModalOverlay onClick={() => closeModal()}>
      <StyledModal>
        <p>Delete the item?</p>
        <ButtonBlock>
          <Button
            variant="contained"
            style={{ margin: "0px 15px" }}
            onClick={() => closeModal()}
          >
            Cancel
          </Button>
          <Button
            style={{
              margin: "0px 15px",
              backgroundColor: "#f44336",
              color: "white",
            }}
            variant="contained"
            onClick={() => confirmDelete()}
          >
            Delete
          </Button>
        </ButtonBlock>
      </StyledModal>
    </ModalOverlay>
  );
};

export { Modal };

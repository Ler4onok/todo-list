import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModal = styled.div`
  min-width: 300px;
  height: auto;
  padding: 25px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    margin: 0;
  }
`;

export const ButtonBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 25px;
`;

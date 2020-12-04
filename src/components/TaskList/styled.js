import styled from "styled-components";
// to import svg as react component
import { ReactComponent as Delete } from "../../assets/delete.svg";
import { motion } from "framer-motion";

export const StyledTask = styled(motion.div)`
  display: flex;
  position: relative;
  font-family: monospace;
  width: 450px;
  height: 50px;
  border-color: #3f51b5;
  border-style: solid;
  border-width: 2px;
  border-radius: 7px;
  margin: 7px;
  align-items: center;
  padding: 0px 12px 0px 0px;
`;

export const StyledContainer = styled.div`
  position: absolute;
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledLabel = styled.label`
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
  font-size: 18px;
`;

export const DeleteIcon = styled(Delete)`
  &:hover {
    fill: red;
  }
`;

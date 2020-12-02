import styled from "styled-components";

export const StyledTask = styled.div`
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
  padding: 0px 25px;
`;

export const StyledContainer = styled.div`
  position: absolute;
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

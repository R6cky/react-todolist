import styled from "styled-components";

export const TaskStyled = styled.li`
  border: solid blue;
  width: 80%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .remove-btn {
    cursor: pointer;
  }
`;

import styled from "styled-components";

export const TrashCardStyle = styled.li`
  border: solid red;
  width: 90%;
  max-width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  .trash-restore {
    cursor: pointer;
  }
`;

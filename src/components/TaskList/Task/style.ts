import styled from "styled-components";

export const TaskStyled = styled.li`
  width: 100%;
  max-width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  -webkit-box-shadow: -1px 6px 13px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: -1px 6px 13px 0px rgba(0, 0, 0, 0.5);
  box-shadow: -1px 6px 13px 0px rgba(0, 0, 0, 0.5);

  .remove-btn {
    cursor: pointer;
  }
`;

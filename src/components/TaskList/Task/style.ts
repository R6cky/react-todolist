import styled from "styled-components";

export const TaskStyled = styled.li`
  width: 99%;
  max-width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-radius: 8px;
  -webkit-box-shadow: -1px 6px 13px 0px rgba(255, 255, 255, 0.5);
  -moz-box-shadow: -1px 6px 13px 0px rgba(255, 255, 255, 0.5);
  box-shadow: -1px 6px 13px 0px rgba(255, 255, 255, 0.5);

  -webkit-animation: animation-default 1.2s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  .header-todo {
    width: 50%;
    max-width: 100%;
    display: flex;
    align-items: flex-start;

    .task-title {
      color: var(--words-color1);
    }

    .task-content {
      color: var(--words-color1);
    }
  }
  .task-category {
    color: var(--words-color1);
    font-size: 11px;
    border: solid var(--words-color1) 0.1px;
    border-radius: 8px;

    padding: 5px;
  }

  .remove-btn {
    cursor: pointer;
    color: var(--words-color1);
  }
`;

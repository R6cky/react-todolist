import styled from "styled-components";

export const TaskStyled = styled.li`
  width: 99%;
  max-width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  border-radius: 8px;
  -webkit-box-shadow: -1px 6px 13px 0px rgba(255, 255, 255, 0.5);
  -moz-box-shadow: -1px 6px 13px 0px rgba(255, 255, 255, 0.5);
  box-shadow: -1px 6px 13px 0px rgba(255, 255, 255, 0.5);

  -webkit-animation: animation-default 1.2s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  .task-container {
    width: 98%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .task-complete {
    opacity: 0.3;
    text-decoration: line-through;
  }

  .input-checkbox {
    width: 50px;
    height: 30px;

    input {
      width: 1.4rem;
      height: 1.4rem;
      cursor: pointer;

      :-ms-input-placeholder {
        background: red;
      }
    }
  }

  .header-todo {
    width: 50%;
    max-width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: left;

    .task-title {
      color: var(--words-color1);
    }

    .task-content {
      color: var(--words-color1);
      font-size: 0.8rem;

      @media (max-width: 400px) {
        max-width: 15ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .task-category {
    color: var(--words-color1);
    font-size: 9px;
    border: solid var(--words-color1) 0.1px;
    border-radius: 8px;
    padding: 5px;
  }

  .task-view {
    color: var(--words-color1);
    cursor: pointer;

    .task-view-icon {
      width: 30px;
      height: 25px;
      margin: 0 5px;
    }
  }
  .remove-btn {
    cursor: pointer;
    color: var(--words-color1);
  }
`;

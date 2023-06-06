import styled from "styled-components";

export const TaskListStyled = styled.ul`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  -webkit-animation: animation-default 1.2s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  .my-list-title {
    border-top: solid 0.2px;
    border-bottom: solid 0.2px;
    width: 99%;
    max-width: 100%;
    height: 80px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--words-color1);
  }

  .void-list {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    color: var(--words-color1);
  }
`;

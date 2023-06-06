import styled from "styled-components";

export const TaskListStyled = styled.ul`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  h2 {
    border: solid 0.8px;
    width: 100%;
    max-width: 100%;
    height: 80px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .void-list {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
  }
`;

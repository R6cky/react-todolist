import styled from "styled-components";

export const MainStyled = styled.main`
  width: 100vw;
  max-width: 100%;

  .header-todo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    h2 {
      color: var(--words-color1);
    }
  }

  .add-task-button {
    cursor: pointer;
    font-size: 28px;
    width: 40px;
    height: 40px;
    background-color: var(--words-color1);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2px;
  }

  .header-area {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    max-width: 100%;
    height: 100px;

    .trash {
      cursor: pointer;
      color: var(--words-color1);
    }
  }
`;

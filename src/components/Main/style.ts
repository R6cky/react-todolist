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

  .select-list {
    width: 11rem;
    max-width: 100%;
    height: 2rem;
    max-height: 100%;
    border-radius: 4px;
    padding: 4px;
    font-size: 16px;
    background-color: var(--primary-color);
    color: var(--words-color1);
    cursor: pointer;
    border: solid 0.2px;

    option {
      background-color: var(--primary-color);
      color: var(--words-color1);
      width: 9rem;
      height: 2rem;
    }
  }

  .header-area {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    max-width: 100%;
    height: 100px;

    .trash-div {
      cursor: pointer;
      color: var(--words-color1);
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      .trash {
        width: 25px;
        height: 25px;
      }
    }
  }
`;

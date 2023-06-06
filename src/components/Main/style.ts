import styled from "styled-components";

export const MainStyled = styled.main`
  width: 100vw;
  max-width: 100%;

  .header-todo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .add-task-button {
    cursor: pointer;
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
    }
  }
`;

import styled from "styled-components";

export const TrashStyle = styled.div`
  border: solid red;
  position: absolute;
  top: 0px;
  width: 100vw;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .trash-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border: solid white;
    width: 50%;
    max-width: 100%;
    height: 50px;
  }

  .clear-all {
    cursor: pointer;
  }

  .close-trash-modal {
    cursor: pointer;
  }
`;

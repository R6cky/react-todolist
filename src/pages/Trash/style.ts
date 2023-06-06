import styled from "styled-components";

export const TrashStyle = styled.div`
  position: absolute;
  top: 0px;
  width: 100vw;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 40px;

  .trash-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border: solid white;
    width: 90%;
    max-width: 100%;
    height: 50px;
  }

  .trash-header-title {
    color: white;
  }
  .clear-all {
    cursor: pointer;
    color: white;
    font-size: 16px;
  }

  .close-trash-modal {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
`;

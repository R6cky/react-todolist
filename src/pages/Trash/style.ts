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

  .trash-container {
    width: 90%;
    max-width: 100%;
    height: 500px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 50px;
    background-color: var(--primary-color);
  }

  .trash-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: 90%;
    max-width: 100%;
    height: 80px;
  }

  .clear-all {
    cursor: pointer;
    color: var(--words-color1);
    font-size: 16px;

    :hover {
      text-decoration: underline;
    }
  }

  .close-trash-modal {
    width: 40px;
    height: 40px;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: var(--words-color1);
    color: var(--primary-color);
  }
`;

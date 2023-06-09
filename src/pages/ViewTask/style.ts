import styled from "styled-components";

export const ViewTaskStyle = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 40px;

  .view-container {
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
    animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  .content-Card {
    border: solid var(--words-color1) 0.2px;
    border-radius: 8px;
    width: 90%;
    height: 300px;
    color: var(--words-color1);
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    span {
      width: 120px;
      max-width: 100%;
      height: 1.5rem;
      border-radius: 4px;
      border: solid 0.2px var(--words-color1);
      padding: 4px;
      font-size: 12px;
    }
  }

  .view-header {
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 20px;
    width: 90%;
    max-width: 100%;
    height: 80px;
  }

  .close-view-modal {
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

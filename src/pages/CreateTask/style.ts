import styled from "styled-components";

export const CreateTaskStyled = styled.div`
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

  .close-btn {
    width: 90%;
    display: flex;
    flex-direction: row-reverse;
    padding: 0 10px;
    cursor: pointer;

    span {
      width: 40px;
      height: 40px;
      font-size: 22px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: var(--words-color1);
      color: var(--primary-color);
    }
  }

  form {
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

    -webkit-animation: animation-default 1.2s
      cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;

    input {
      width: 90%;
      max-width: 100%;
      height: 40px;
      font-size: 16px;
      background-color: var(--words-color1);
      padding: 5px;
      border-radius: 4px;
    }

    textarea {
      width: 90%;
      max-width: 100%;
      height: 80px;
      font-size: 16px;
      background-color: var(--words-color1);
      padding: 5px;
      border-radius: 4px;
    }

    select {
      width: 90%;
      max-width: 100%;
      height: 40px;
      cursor: pointer;
      font-size: 16px;
      background-color: var(--words-color1);
      padding: 5px;
      border-radius: 4px;
    }

    .button-create-task {
      width: 90%;
      max-width: 100%;
      height: 40px;
      cursor: pointer;
      font-size: 16px;
      background-color: var(--words-color1);
      border-radius: 4px;
    }

    .reset-button {
      cursor: pointer;
    }
  }
`;

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
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
  }

  form {
    width: 90%;
    max-width: 100%;
    height: 500px;
    border: solid red;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 50px;

    input {
      width: 90%;
      max-width: 100%;
      height: 40px;
      font-size: 16px;
    }

    textarea {
      width: 90%;
      max-width: 100%;
      height: 80px;
      font-size: 16px;
    }

    select {
      width: 90%;
      max-width: 100%;
      height: 40px;
      cursor: pointer;
      font-size: 16px;
    }

    .button-create-task {
      width: 90%;
      max-width: 100%;
      height: 40px;
      cursor: pointer;
      font-size: 16px;
    }

    .reset-button {
      cursor: pointer;
    }
  }
`;

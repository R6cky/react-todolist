import styled from "styled-components";

export const CreateTaskStyled = styled.div`
  border: solid purple 3px;
  position: absolute;
  top: 0px;
  width: 100vw;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
    height: 450px;
    border: solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    input {
      width: 90%;
      max-width: 100%;
      height: 40px;
    }

    textarea {
      width: 90%;
      max-width: 100%;
      height: 80px;
    }

    select {
      width: 90%;
      max-width: 100%;
      height: 40px;
    }

    .button-create-task {
      width: 90%;
      max-width: 100%;
      height: 40px;
      cursor: pointer;
    }
  }
`;

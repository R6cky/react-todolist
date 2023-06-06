import styled from "styled-components";

export const TrashCardStyle = styled.li`
  width: 99%;
  max-width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-radius: 8px;
  -webkit-box-shadow: -1px 6px 13px 0px rgba(255, 255, 255, 0.5);
  -moz-box-shadow: -1px 6px 13px 0px rgba(255, 255, 255, 0.5);
  box-shadow: -1px 6px 13px 0px rgba(255, 255, 255, 0.5);

  -webkit-animation: animation-default 1.2s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  .trash-restore {
    cursor: pointer;
    color: var(--words-color1);
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .restore {
    width: 30px;
    height: 30px;
  }

  .trash-category {
    font-size: 9px;
    color: var(--words-color1);
    border: solid var(--words-color1) 0.2px;
    padding: 5px;
    border-radius: 8px;
  }

  .content-trash {
    width: 50%;
    max-width: 100%;
    height: 100px;
    padding: 10px 5px 5px 10px;

    h3 {
      color: var(--words-color1);
    }

    p {
      color: var(--words-color1);
      margin-bottom: 5px;
    }

    span {
      color: var(--words-color1);
      font-size: 10px;
      border: solid 0.2px;
      border-radius: 8px;
      padding: 5px;
    }
  }
`;

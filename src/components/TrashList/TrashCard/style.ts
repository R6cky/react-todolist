import styled from "styled-components";

export const TrashCardStyle = styled.li`
  width: 99%;
  max-width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-radius: 8px;
  -webkit-box-shadow: -1px 6px 13px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: -1px 6px 13px 0px rgba(0, 0, 0, 0.5);
  box-shadow: -1px 6px 13px 0px rgba(0, 0, 0, 0.5);

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

  .content-trash {
    width: 50%;
    height: 80px;

    h3 {
      color: var(--words-color1);
    }

    p {
      color: var(--words-color1);
    }

    span {
      color: var(--words-color1);
    }
  }
`;

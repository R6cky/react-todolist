import styled from "styled-components";

export const TrashCardStyle = styled.li`
  width: 90%;
  max-width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  .trash-restore {
    cursor: pointer;
    color: white;
  }

  .content-trash {
    h3 {
      color: white;
    }

    p {
      color: white;
    }

    span {
      color: white;
    }
  }
`;

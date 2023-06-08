import styled from "styled-components";

export const ClearTrashStyle = styled.div`
  position: absolute;
  top: 0px;
  width: 100vw;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 70px;

  .clear-container {
    width: 20rem;
    max-width: 100%;
    height: 200px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 50px;
    background-color: var(--primary-color);
    color: var(--words-color1);
    -webkit-box-shadow: -4px 0px 27px -10px rgba(255, 255, 255, 221);
    -moz-box-shadow: -4px 0px 27px -10px rgba(255, 255, 255, 221);
    box-shadow: -4px 0px 27px -10px rgba(255, 255, 255, 221);
    border: solid white 0.1px;

    h3 {
      text-align: center;
    }

    span {
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }

    .content-Card {
      display: flex;
      width: 100%;
      justify-content: space-around;
    }
  }
`;

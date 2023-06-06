import styled from "styled-components";

export const TrashListStyle = styled.ul`
  width: 90%;
  max-width: 100%;
  height: 500px;
  border-bottom: solid gray 0.5px;
  border-top: solid gray 0.5px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  padding: 20px 0 50px 0;
  background-color: var(--primary-color);

  -webkit-animation: animation-default 1.2s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  .void-list {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    color: var(--words-color1);
  }
`;

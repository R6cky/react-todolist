import { ViewTaskStyle } from "./style";

export const ViewTask = ({ setIsModalViewActive }: any) => {
  return (
    <ViewTaskStyle>
      <div className="trash-container">
        <header className="trash-header">
          <span
            className="close-trash-modal"
            onClick={() => setIsModalViewActive(false)}
          >
            X
          </span>
        </header>
        <div className="content-Card">
          <h3>t</h3>
          <p>d</p>
          <span>c</span>
        </div>
      </div>
    </ViewTaskStyle>
  );
};

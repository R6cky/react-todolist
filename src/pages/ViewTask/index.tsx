import { ViewTaskStyle } from "./style";

export const ViewTask = ({ setIsModalViewActive, taskData }: any) => {
  return (
    <ViewTaskStyle>
      <div className="view-container">
        <header className="view-header">
          <span
            className="close-view-modal"
            onClick={() => setIsModalViewActive(false)}
          >
            X
          </span>
        </header>
        <div className="content-Card">
          <h3>{taskData[0].title}</h3>
          <p>{taskData[0].description}</p>
          <span>{taskData[0].category}</span>
        </div>
      </div>
    </ViewTaskStyle>
  );
};

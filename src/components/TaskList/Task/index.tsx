import { TaskStyled } from "./style";
import { BsCheck2Circle, BsTrash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { ViewTask } from "../../../pages/ViewTask";

export const Task = ({
  task,
  removeTaskList,
  setIsModalViewActive,
  isModalViewActive,
  viewTask,
  taskData,
  taskComplete,
}: any) => {
  return (
    <TaskStyled>
      <div
        className="task-container"
        style={{
          textDecoration: task.isDone ? "line-through" : "",
          opacity: task.isDone ? "0.5" : "1",
        }}
      >
        <div className="input-checkbox">
          <input
            type="checkbox"
            checked={task.isDone ? true : false}
            onChange={() => taskComplete(task.id)}
          />
        </div>
        <div className="header-todo">
          <h3 className="task-title">{task.title}</h3>
          <p className="task-content">{task.content}</p>
        </div>
        <span className="task-category">{task.category}</span>
        <span
          title="Clique para visualizar a tarefa"
          className="task-view"
          onClick={() => viewTask(task.id)}
        >
          <BsEye className="task-view-icon" />
        </span>
        <span
          className="remove-btn"
          onClick={() => removeTaskList(task.id)}
          title={"Remover tarefa"}
        >
          <BsTrash className="trash" />
        </span>
      </div>
      {isModalViewActive && (
        <ViewTask
          taskData={taskData}
          setIsModalViewActive={setIsModalViewActive}
        />
      )}
    </TaskStyled>
  );
};

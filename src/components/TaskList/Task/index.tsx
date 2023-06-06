import { TaskStyled } from "./style";
import { BsTrash } from "react-icons/bs";

export const Task = ({ task, removeTaskList }: any) => {
  return (
    <TaskStyled>
      <div className="header-todo">
        <h3 className="task-title">{task.title}</h3>
        <p className="task-content">{task.description}</p>
      </div>
      <span className="task-category">{task.category}</span>
      <span
        className="remove-btn"
        onClick={() => removeTaskList(task.id)}
        title={"Remover tarefa"}
      >
        <BsTrash className="trash" />
      </span>
    </TaskStyled>
  );
};

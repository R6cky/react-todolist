import { TaskStyled } from "./style";
import { BsTrash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

export const Task = ({ task, removeTaskList, setIsModalViewActive }: any) => {
  return (
    <TaskStyled>
      <div className="header-todo">
        <h3 className="task-title">{task.title}</h3>
        <p className="task-content">{task.description}</p>
      </div>
      <span className="task-category">{task.category}</span>
      <span
        title="Clique para visualizar a tarefa"
        className="task-view"
        onClick={() => setIsModalViewActive(true)}
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
    </TaskStyled>
  );
};

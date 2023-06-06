import { TaskStyled } from "./style";

export const Task = ({ task, removeTaskList }: any) => {
  return (
    <TaskStyled>
      <div className="header-todo">
        <h3 className="task-title">{task.title}</h3>
        <p className="task-content">{task.description}</p>
      </div>
      <span className="task-category">{task.category}</span>
      <span className="remove-btn" onClick={() => removeTaskList(task.id)}>
        remover
      </span>
    </TaskStyled>
  );
};

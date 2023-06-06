import { TaskStyled } from "./style";

export const Task = ({ task, removeTaskList }: any) => {
  return (
    <TaskStyled>
      <div className="header-todo">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <span>{task.category}</span>
      <span className="remove-btn" onClick={() => removeTaskList(task.id)}>
        remover
      </span>
    </TaskStyled>
  );
};

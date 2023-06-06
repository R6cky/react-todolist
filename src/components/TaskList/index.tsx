import { iTasksWithId } from "../../interfaces/interfaces";
import { Task } from "./Task";
import { TaskListStyled } from "./style";

export const TaskList = ({ taskList, removeTaskList }: any) => {
  return (
    <TaskListStyled>
      <h2>Minha lista</h2>
      {taskList.length > 0 ? (
        taskList.map((task: iTasksWithId) => {
          return (
            <Task key={task.id} task={task} removeTaskList={removeTaskList} />
          );
        })
      ) : (
        <p className="void-list">Lista vazia</p>
      )}
    </TaskListStyled>
  );
};

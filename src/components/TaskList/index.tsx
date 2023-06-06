import { iTasksWithId } from "../../interfaces/interfaces";
import { Task } from "./Task";
import { TaskListStyled } from "./style";

export const TaskList = ({ taskList, removeTaskList }: any) => {
  return (
    <TaskListStyled>
      <li className="my-list-title">
        <h2>Minha lista</h2>
      </li>
      {taskList.length > 0 ? (
        taskList.map((task: iTasksWithId) => {
          return (
            <Task key={task.id} task={task} removeTaskList={removeTaskList} />
          );
        })
      ) : (
        <li>
          <p className="void-list">Lista vazia</p>
        </li>
      )}
    </TaskListStyled>
  );
};

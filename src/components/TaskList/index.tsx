import { iTasksWithId, tTasks } from "../../interfaces/interfaces";
import { Task } from "./Task";
import { TaskListStyled } from "./style";

export const TaskList = ({ taskList, removeTaskList }: any) => {
  return (
    <TaskListStyled>
      <h2>Welcome, user!</h2>

      {taskList.length > 0 ? (
        taskList.map((task: iTasksWithId) => {
          return (
            <Task key={task.id} task={task} removeTaskList={removeTaskList} />
          );
        })
      ) : (
        <p>Lista vazia</p>
      )}
    </TaskListStyled>
  );
};

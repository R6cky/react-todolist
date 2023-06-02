import { Header } from "../Header";
import { TaskList } from "../TaskList";
import { MainStyled } from "./style";

export const Main = ({ openTaskModal, taskList, removeTaskList }: any) => {
  return (
    <MainStyled>
      <Header />
      <div className="header-todo">
        <h2>Welcome, user!</h2>
        <span className="add-task-button" onClick={openTaskModal}>
          +
        </span>
      </div>
      <TaskList taskList={taskList} removeTaskList={removeTaskList}></TaskList>
    </MainStyled>
  );
};

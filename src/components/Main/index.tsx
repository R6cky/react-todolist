import { Header } from "../Header";
import { TaskList } from "../TaskList";
import { MainStyled } from "./style";
import { BsTrash } from "react-icons/bs";

export const Main = ({
  openTaskModal,
  setIsModalTrashActive,
  taskList,
  removeTaskList,
}: any) => {
  return (
    <MainStyled>
      <Header />
      <div className="header-area">
        <div className="header-todo">
          <h2>Cria nova lista</h2>
          <span className="add-task-button" onClick={openTaskModal}>
            <p>+</p>
          </span>
        </div>
        <div
          className="trash-div"
          title={"lixeira"}
          onClick={() => setIsModalTrashActive(true)}
        >
          <BsTrash className="trash" />
        </div>
      </div>
      <TaskList taskList={taskList} removeTaskList={removeTaskList}></TaskList>
    </MainStyled>
  );
};

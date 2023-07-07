import { Header } from "../Header";
import { TaskList } from "../TaskList";
import { MainStyled } from "./style";
import { BsTrash } from "react-icons/bs";

export const Main = ({
  openTaskModal,
  setIsModalTrashActive,
  taskList,
  removeTaskList,
  setIsModalViewActive,
  isModalViewActive,
  viewTask,
  taskData,
  taskComplete,
}: any) => {
  return (
    <MainStyled>
      <Header />
      <div className="header-area">
        <div className="header-todo">
          <span
            className="add-task-button"
            onClick={openTaskModal}
            title="Criar nova lista"
          >
            <p>+</p>
          </span>
        </div>
        <select
          onChange={(e) => console.log(e.target.value)}
          className="select-list"
          defaultValue={"Todas as Tarefas"}
          name=""
          id=""
        >
          <option value="Todas as tarefas">Todas as tarefas</option>
          <option value="Tarefas feitas">Tarefas feitas</option>
          <option value="Tarefas pendentes">Tarefas pendentes</option>
        </select>
        <div
          className="trash-div"
          title={"lixeira"}
          onClick={() => setIsModalTrashActive(true)}
        >
          <BsTrash className="trash" />
        </div>
      </div>
      <TaskList
        taskList={taskList}
        removeTaskList={removeTaskList}
        setIsModalViewActive={setIsModalViewActive}
        isModalViewActive={isModalViewActive}
        viewTask={viewTask}
        taskData={taskData}
        taskComplete={taskComplete}
      ></TaskList>
    </MainStyled>
  );
};

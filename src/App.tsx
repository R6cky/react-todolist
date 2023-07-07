import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Main } from "./components/Main";
import { CreateTask } from "./pages/CreateTask";
import { iTasksWithId, tTasks } from "./interfaces/interfaces";
import { v4 as uuidv4 } from "uuid";
import { Trash } from "./pages/Trash";
import { ClearTrash } from "./pages/ClearTrash";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isModalTaskActive, setIsModalTaskActive] = useState(false as boolean);
  const [isModalTrashActive, setIsModalTrashActive] = useState(
    false as boolean
  );
  const [isModalClearTrashActive, setIsModalClearTrashActive] = useState(
    false as boolean
  );
  const [isModalViewActive, setIsModalViewActive] = useState(false as boolean);

  const [taskList, setTaskList] = useState([] as Array<iTasksWithId>);
  const [trashList, setTrashList] = useState([] as Array<iTasksWithId>);
  const [taskData, setTaskData] = useState([] as Array<iTasksWithId>);

  const openTaskModal = (): void => {
    if (!isModalTaskActive) {
      setIsModalTaskActive(true);
    } else {
      setIsModalTaskActive(false);
    }
  };

  const addTasks = (data: tTasks): void => {
    const newDataTask: iTasksWithId = { ...data, isDone: false, id: uuidv4() };
    setTaskList([...taskList, newDataTask]);
  };

  const removeTaskList = (id: string) => {
    const newTaskList: Array<iTasksWithId> = taskList.filter(
      (task) => task.id !== id
    );

    const newTrashList: Array<iTasksWithId> = taskList.filter(
      (task) => task.id === id
    );
    setTrashList([...trashList, ...newTrashList]);
    setTaskList(newTaskList);
  };

  const restoreTrash = (id: string) => {
    const restored: Array<iTasksWithId> = trashList.filter((elem) => {
      return elem.id !== id;
    });
    const restoreToMainList: Array<iTasksWithId> = trashList.filter((elem) => {
      return elem.id === id;
    });

    setTaskList([...taskList, ...restoreToMainList]);
    setTrashList(restored);
  };

  const clearAllTrash = () => {
    setTrashList([]);
    setIsModalClearTrashActive(false);
    if (trashList.length > 0) {
      toast.success(`Itens excluídos com sucesso!`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        theme: "dark",
      });
    } else {
      toast.error(`Impossível excluir itens. Sua lista já está vazia!`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        theme: "dark",
      });
    }
  };

  const viewTask = (id: string): void => {
    const task: Array<iTasksWithId> = taskList.filter((elem) => {
      return elem.id === id;
    });

    setTaskData(task);
    setIsModalViewActive(true);
  };

  const taskComplete = (id: string) => {
    const newTasks = [...taskList];
    newTasks.map((task) =>
      task.id === id ? (task.isDone = !task.isDone) : task
    );

    setTaskList(newTasks);
  };

  return (
    <div>
      <GlobalStyle />
      <Main
        isModalTaskActive={isModalTaskActive}
        setIsModalTaskActive={setIsModalTaskActive}
        isModalTrashActive={isModalTrashActive}
        setIsModalTrashActive={setIsModalTrashActive}
        openTaskModal={openTaskModal}
        taskList={taskList}
        removeTaskList={removeTaskList}
        setIsModalViewActive={setIsModalViewActive}
        isModalViewActive={isModalViewActive}
        viewTask={viewTask}
        taskData={taskData}
        taskComplete={taskComplete}
      />
      {isModalTaskActive && (
        <CreateTask openTaskModal={openTaskModal} addTasks={addTasks} />
      )}

      {isModalTrashActive && (
        <Trash
          setIsModalTrashActive={setIsModalTrashActive}
          trashList={trashList}
          restoreTrash={restoreTrash}
          setIsModalClearTrashActive={setIsModalClearTrashActive}
        />
      )}

      {isModalClearTrashActive && (
        <ClearTrash
          setIsModalClearTrashActive={setIsModalClearTrashActive}
          clearAllTrash={clearAllTrash}
        />
      )}

      <ToastContainer />
    </div>
  );
}

export default App;

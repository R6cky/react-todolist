import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Main } from "./components/Main";
import { CreateTask } from "./pages/CreateTask";
import { iTasksWithId, tTasks } from "./interfaces/interfaces";
import { v4 as uuidv4 } from "uuid";
import { Trash } from "./pages/Trash";
//import { RoutesMain } from "./routes/RoutesMain";

function App() {
  const [isModalTaskActive, setIsModalTaskActive] = useState(false as boolean);
  const [isModalTrashActive, setIsModalTrashActive] = useState(
    false as boolean
  );
  const [taskList, setTaskList] = useState([] as Array<iTasksWithId>);
  const [trashList, setTrashList] = useState([] as Array<iTasksWithId>);

  const openTaskModal = (): void => {
    if (!isModalTaskActive) {
      setIsModalTaskActive(true);
    } else {
      setIsModalTaskActive(false);
    }
  };

  const addTasks = (data: tTasks): void => {
    const newDataTask: iTasksWithId = { ...data, id: uuidv4() };
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
      />
      {isModalTaskActive && (
        <CreateTask openTaskModal={openTaskModal} addTasks={addTasks} />
      )}

      {isModalTrashActive && (
        <Trash
          setIsModalTrashActive={setIsModalTrashActive}
          trashList={trashList}
          setTrashList={setTrashList}
          restoreTrash={restoreTrash}
        />
      )}
    </div>
  );
}

export default App;

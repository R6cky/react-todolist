import { useState } from "react";
import { CreateTaskStyled } from "./style";
import { tTasks } from "../../interfaces/interfaces";

export const CreateTask = ({ openTaskModal, addTasks }: any) => {
  const [dataTask, setDataTask] = useState({
    title: "",
    description: "",
    category: "",
  } as tTasks);

  const submit = (e: any): void => {
    e.preventDefault();
    addTasks(dataTask);
    openTaskModal();
  };

  return (
    <CreateTaskStyled>
      <form action="" onSubmit={submit}>
        <div className="close-btn" onClick={openTaskModal}>
          <span>X</span>
        </div>
        <input
          type="text"
          placeholder="Título da tarefa"
          onInput={(e) => {
            setDataTask({ ...dataTask, title: e.target.value });
          }}
        />
        <textarea
          name=""
          id=""
          placeholder="Descrição da tarefa"
          onInput={(e) =>
            setDataTask({ ...dataTask, description: e.target.value })
          }
        ></textarea>
        <select
          defaultValue="Lazer"
          name=""
          id=""
          onChange={(e) =>
            setDataTask({ ...dataTask, category: e.target.value })
          }
        >
          <option value="Lazer">Lazer</option>
          <option value="Produtividade">Produtividade</option>
          <option value="Alimentacao">Alimentacao</option>
          <option value="Financas">Financas</option>
        </select>
        <button className="button-create-task">Criar</button>
        <input type="reset" />
      </form>
    </CreateTaskStyled>
  );
};

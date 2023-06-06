import { TrashStyle } from "./style";
import { TrashList } from "../../components/TrashList";

export const Trash = ({
  setIsModalTrashActive,
  trashList,
  setTrashList,
  restoreTrash,
}: any) => {
  return (
    <TrashStyle>
      <header className="trash-header">
        <h3>Lixeira</h3>
        <span className="clear-all" onClick={() => setTrashList([])}>
          Esvaziar lixeira
        </span>
        <span
          className="close-trash-modal"
          onClick={() => setIsModalTrashActive(false)}
        >
          X
        </span>
      </header>
      <TrashList trashList={trashList} restoreTrash={restoreTrash} />
    </TrashStyle>
  );
};

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
      <div className="trash-container">
        <header className="trash-header">
          <h3 className="trash-header-title">Lixeira</h3>
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
        <TrashList
          trashList={trashList}
          restoreTrash={restoreTrash}
          setIsModalTrashActive={setIsModalTrashActive}
          setTrashList={setTrashList}
        />
      </div>
    </TrashStyle>
  );
};

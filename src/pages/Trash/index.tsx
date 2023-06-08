import { TrashStyle } from "./style";
import { TrashList } from "../../components/TrashList";

export const Trash = ({
  setIsModalTrashActive,
  trashList,
  setTrashList,
  restoreTrash,
  setIsModalClearTrashActive,
}: any) => {
  return (
    <TrashStyle>
      <div className="trash-container">
        <header className="trash-header">
          <span
            className="clear-all"
            onClick={() => setIsModalClearTrashActive(true)}
          >
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

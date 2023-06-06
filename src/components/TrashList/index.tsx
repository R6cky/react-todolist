import { TrashCard } from "./TrashCard";
import { TrashListStyle } from "./style";

export const TrashList = ({ trashList, restoreTrash }: any) => {
  return (
    <TrashListStyle>
      {trashList.length > 0 ? (
        trashList.map((elem: any) => (
          <TrashCard card={elem} restoreTrash={restoreTrash} key={elem.id} />
        ))
      ) : (
        <li>
          <p className="void-list">Lista Vazia</p>
        </li>
      )}
    </TrashListStyle>
  );
};

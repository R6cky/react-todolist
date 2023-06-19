import { TrashCardStyle } from "./style";
import { MdRestore } from "react-icons/md";
export const TrashCard = ({ card, restoreTrash }: any) => {
  return (
    <TrashCardStyle>
      <div className="content-trash">
        <h3 className="trash-title">{card.title}</h3>
        <p className="trash-content">{card.content}</p>
      </div>
      <span className="trash-category">{card.category}</span>
      <div className="trash-restore">
        <span title="Restaurar item" onClick={() => restoreTrash(card.id)}>
          <MdRestore className="restore" />
        </span>
      </div>
    </TrashCardStyle>
  );
};

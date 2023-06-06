import { TrashCardStyle } from "./style";
import { MdRestore } from "react-icons/md";
export const TrashCard = ({ card, restoreTrash }: any) => {
  return (
    <TrashCardStyle>
      <div className="content-trash">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <span>{card.category}</span>
      </div>
      <div className="trash-restore">
        <span title="Restaurar item" onClick={() => restoreTrash(card.id)}>
          <MdRestore className="restore" />
        </span>
      </div>
    </TrashCardStyle>
  );
};

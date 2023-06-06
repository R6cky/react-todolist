import { TrashCardStyle } from "./style";

export const TrashCard = ({ card, restoreTrash }: any) => {
  return (
    <TrashCardStyle>
      <div className="content-trash">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <span>{card.category}</span>
      </div>
      <div className="trash-restore">
        <span onClick={() => restoreTrash(card.id)}>Restaurar</span>
      </div>
    </TrashCardStyle>
  );
};

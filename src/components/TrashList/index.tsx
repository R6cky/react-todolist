import { TrashCard } from "./TrashCard";
import { TrashListStyle } from "./style";

export const TrashList = ({ trashList, restoreTrash }: any) => {
  return (
    <TrashListStyle>
      {trashList.map((elem: any) => (
        <TrashCard card={elem} restoreTrash={restoreTrash} key={elem.id} />
      ))}
    </TrashListStyle>
  );
};

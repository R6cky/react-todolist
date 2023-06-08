import { ClearTrashStyle } from "./style";

export const ClearTrash = ({
  clearAllTrash,
  setIsModalClearTrashActive,
}: any) => {
  return (
    <ClearTrashStyle>
      <div className="clear-container">
        <h3>Deseja excluir todos os itens da lixeira? </h3>
        <div className="content-Card">
          <span onClick={() => clearAllTrash()}>Sim</span>
          <span onClick={() => setIsModalClearTrashActive(false)}>Não</span>
        </div>
      </div>
    </ClearTrashStyle>
  );
};

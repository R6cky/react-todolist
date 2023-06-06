import { Route, Routes } from "react-router-dom";
import { Main } from "../components/Main";
import { Trash } from "../pages/Trash";

export const RoutesMain: any = () => {
  return (
    <Routes>
      <Route path="/home" element={<Main />} />
      <Route path="/trash" element={<Trash />} />
    </Routes>
  );
};

import { Route, Routes } from "react-router-dom";
import { Main } from "../components/Main";

export const RoutesMain: any = () => {
  return (
    <Routes>
      <Route path="/home" element={<Main />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

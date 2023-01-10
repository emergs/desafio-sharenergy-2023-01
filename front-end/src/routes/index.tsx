import { Navigate, Route, Routes } from "react-router-dom";
import ApiCat from "../pages/ApiCat";
import ApiDog from "../pages/ApiDog";
import Crud from "../pages/Crud";
import Login from "../pages/Login";
import Main from "../pages/Main";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<Main />} />
      <Route path="/apidog" element={<ApiDog />} />
      <Route path="/apicat" element={<ApiCat />} />
      <Route path="/crud" element={<Crud />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}

export default AppRoutes;
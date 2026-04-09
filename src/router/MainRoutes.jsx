import { Routes, Route } from "react-router-dom";
import Client from "../client/client";
import MainLayout from "../admin/layout/MainLayout";
import ProtectedRoute from "../controllers/ProtectedRoute";
// login import 
import Login from "../Authorization/Login";
// boshqa componentlar 

const MainRoutes = () => {
  return (
    <Routes>
        {/* public */}
        <Route path="/" element={<Client/>}/>
        <Route path="/login" element={<Login/>}/>
        
        {/* admin panel */}
        <Route element={<ProtectedRoute><MainLayout/></ProtectedRoute>}>
            {/* outletda chiquvhi boshqa route lar shu yerda bo'ladi  */}
            {/* dashboart visitor serring va boshqalarni sho'rga yoziladi */}
        </Route>
    </Routes>
  )
}

export default MainRoutes

import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import AddACustomer from "../components/AddACustomer";
import CustomerList from "../components/CustomerList";
import Login from "../components/Login";
import { authContext } from "../context/AuthContextProvider";
import '../App.css'
import EditCustomer from "../components/EditCustomer";

export default function AllRoutes() {
  const { isAuth } = useContext(authContext);

  return (
    <Routes>
      <Route path="/" element={isAuth ? <CustomerList /> : <Login />}></Route>
      <Route path="/addCustomer" element={<AddACustomer />}></Route> 
      <Route path="/editCustomer/:id" element={<EditCustomer />}></Route> 
    </Routes>
  );
}

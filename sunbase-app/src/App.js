import { useContext } from "react";
import "./App.css";

import { authContext } from "./context/AuthContextProvider";
import Login from "./components/Login.jsx";
import CustomerList from "./components/CustomerList";
import AllRoutes from "./routes/AllRoutes";


function App() {
  const { isAuth } = useContext(authContext);

  // <div className="App">{isAuth ? <CustomerList /> : <Login />}

  return <AllRoutes></AllRoutes>;
}

export default App;

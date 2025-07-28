import React from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Header from "./components/Other/Header";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

const App = () => {
  return(
    <>
      <div className="p-20">
        
        <AdminDashboard />
      </div>
    </>
  )
}

export default App;
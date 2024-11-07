import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from "./Components/Pages/Login/Login"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Components/Pages/Login/Login.css"
import React from "react";
// import AddUser from "./Components/Pages/AddUser/AddUser";
// import "./Components/Pages/AddUser/AddUser.css"
import AdminComponent from "./Components/Pages/Admin/adminComponent"
import "./Components/Pages/Admin/adminComponent.css"
import EmployeeComponent from "./Components/Pages/Employee/EmployeeComponent"
import "./Components/Pages/Employee/EmployeeComponent.css"
// import ForgotPasswordComponent from "./Components/Pages/ForgotPassword/ForgotPasswordComponent"
// import "./Components/Pages/ForgotPassword/ForgotPasswordComponent.css"
// import ProfileComponent from "./Components/Pages/Profile/ProfileComponent"
// import "./Components/Pages/Profile/ProfileComponent.css"

function App() {


  return (
    <>
  <Router>
    <Routes>
    <Route path='/' exact element={<Login/>}/>
    <Route path='/EmployeeComponent' exact element={<EmployeeComponent/>}/>
    <Route path='/adminComponent' exact element={<AdminComponent/>}/>

    </Routes>
  </Router>

      {/* <AddUser/> */}
      {/* <AdminComponent/> */}
      {/* <EmployeeComponent/> */}
      {/* <ForgotPasswordComponent/> */}
      {/* <ProfileComponent/> */}
    </>
  )
}

export default App

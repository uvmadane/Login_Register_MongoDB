import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  
  Routes,
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./components/Register"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import Header from "./components/Header";
import './components/Header.css'

const App = () => {
  const isLoggedIn = !!localStorage.getItem("token")

  return (
    <>
    <Header/>
      <Routes>
      <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  )
}

export default App

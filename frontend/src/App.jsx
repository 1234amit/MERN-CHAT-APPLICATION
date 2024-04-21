import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
// import { useAuthContext } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ChatPage from './pages/ChatPage/ChatPage';
import { useAuthContext } from "./context/AuthContext";



const App = () => {
  const { authUser } = useAuthContext();
  return (
    <>
      <div className=''>
        <Navbar />
        <Routes>
          <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
          <Route path="/login" element={authUser ? <Navigate to='/' /> : <Login />} />
          <Route path="/signup" element={authUser ? <Navigate to='/' /> : <Signup />} />
          <Route path="/chatPage" element={authUser ? <ChatPage /> : <Navigate to="/login" />} />

        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App
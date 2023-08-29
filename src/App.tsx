import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Create from './pages/Create'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Edit from './pages/Edit'
import { Toaster } from 'react-hot-toast'
import Content from './pages/Content'

function App() {
  return (
    <>
      <Toaster />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/content/:id" element={<Content />} />
      </Routes>
    </>
  )
}

export default App

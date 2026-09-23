import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import ResumeSteps from './pages/ResumeSteps'
import UserForms from './pages/UserForms'
import ViewResume from './pages/ViewResume'
import Downloads from './pages/Downloads'
import Pnf from './pages/Pnf'

function App() {

  return (
    <>
    
    <Header/>

    <Routes>
      <Route path='' element={<Home/>} />
      <Route path='steps' element={<ResumeSteps/>} />
      <Route path='forms' element={<UserForms/>} />
      <Route path='views/:rid' element={<ViewResume/>} />
      <Route path='history' element={<Downloads/>} />
      <Route path='/*' element={<Pnf/>} />
    </Routes>
    
    <Footer/>
    </>
  )
}

export default App

//import { useState } from 'react'
import './App.css'

import BottomNavBar from './components/BottomNavBar'

import {Outlet} from "react-router-dom";




function App() {

  return (
    <div className="App">
      <Outlet />
      <div className="BottomNavBarCon">
      <BottomNavBar />
      </div>
    </div>
  )
}

export default App

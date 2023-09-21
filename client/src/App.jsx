import { useState } from 'react'
import './App.css'

import BottomNavBar from './components/BottomNavBar'
import ItemCardContainer from './components/ItemCardContainer'

import {Outlet} from "react-router-dom";




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>This is app</p>
      <ItemCardContainer />
      <Outlet />
      <BottomNavBar />
    </div>
  )
}

export default App

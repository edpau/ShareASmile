import { useState } from 'react'
import './App.css'

import BottomNavBar from './components/BottomNavBar'
import ItemCardContainer from './components/ItemCardContainer'






function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>This is app</p>
      <ItemCardContainer />
      <BottomNavBar />
    </div>
  )
}

export default App

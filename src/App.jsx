import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Card } from './components/card'
import './App.css'
import { RevenueCard } from './components/Revenuecard'

function App() {
  
  return (
    <div className='grid grid-cols-4 '>
      <RevenueCard title={"revenue"} amount={"25463"} orderCount={13}/>
    </div>
  )
}

export default App

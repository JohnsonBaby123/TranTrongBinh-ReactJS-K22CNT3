import React from 'react'
import TtbUseState from './components/TtbUseState'
import TtbUseEffect from './components/TtbUseEffect'
import TtbUseContext from './components/TtbUseContext'
import './App.css'
export default function App() {
  return (
    <div className='container border mt-3'>
        <h1 className='text-center'>Trần Trọng Bình - Hook</h1>
        <hr/>
        <TtbUseState />
        <hr/>
        <TtbUseEffect/>
        <hr/>
        <TtbUseContext/>
    </div>
  )
}

import { useState } from 'react'
import './App.css'

function App(){
  const [count , setcount ] =  useState(0);
  return  <div className="container">
    <h1 className='h1'>
        <span>github pages project </span> 
        <span>i am rahdkhan wazir </span>
        <span>this is my first pip to github</span>
    </h1>
  </div>
}

export default App

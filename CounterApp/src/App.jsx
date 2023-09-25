import { useState } from 'react'
import './App.css'
import Card from './components/Card'
function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;
  const addValue = () => {
    console.log("Value Added", Math.random()); 
    const newCounter = counter < 20 ? counter + 1 : 20;
    setCounter(newCounter);
  }
  const subValue = () => {
    console.log("Value Subtracted", Math.random());
    const newCounter = counter > 0 ? counter - 1 : 0;
    setCounter(newCounter);
  }

  return (
    <>
      <h1 className='bg-slate-100 rounded-xl p-8 dark:bg-blue-800'>Chai aur React Course by - Hitesh Choudhary Sir</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add</button>
      &nbsp;&nbsp;
      <button onClick={subValue}>Sub</button>
      {/* <Card className='d-flex m-4 p4 rounded-lg' username="Ayush Sahay" btnText="Click Here"/>
      <Card className='d-flex m-4 p4 rounded-lg' username="Aditya Sahay" btnText="Click Here"/> */}
      
    </>
  )
}

export default App


import './App.css'
import { useState } from 'react'
import Todolist from './Todolist'

function App() {
  
const [todos, setTodos] = useState("Todo1","Todo2");

  return (
    <div className="App">
      <Todolist todos = {todos}></Todolist>
      <input type = "text"></input>
      <button>add task</button>
      <button>delete task</button>
      <div>ramain task : 0</div>
    </div>
  )
}

export default App

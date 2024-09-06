import './App.scss'
import { useState } from 'react'
import HeaderComponent from './components/HeaderComponent'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const handleNewTodoChange = (event) => {
    // event.preventDefault()
    setNewTodo (event.target.value)
    console.log(newTodo)
  }

  const handleAddTodo = (event) => {
    event.preventDefault()
    if (newTodo === '') return
    setTodos([...todos, newTodo])
    setNewTodo('')
    console.log(todos)
  }

  const handleTodoDelete = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  return (
    <>
    {/* Header Component */}
    <HeaderComponent />
      
    {/* Form insert todo */}
    <div className="container py-5 text-center">
      <h1>Todolist</h1>
      <form action="">
        <input type="text" value={newTodo} onChange={handleNewTodoChange}/>
        <button type='submit' onClick={handleAddTodo}>Add Todo</button>
      </form>

      {/* List todo */}
      <ul className='todos list-unstyled'>
        {
          todos.map((todo, index) => (
            <li className='todo text-primary' key={index}>
              <span>{todo}</span>
              <button onClick={() => handleTodoDelete(index)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>

    </>
  )
}

export default App

import './App.scss'
import { useState, useEffect } from 'react'
import HeaderComponent from './components/HeaderComponent'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  })
  const [newTodo, setNewTodo] = useState('')
  // const [todosLocal, setTodosLocal] = useState([])

  useEffect(() => {
    localStorage.setItem('todos' , JSON.stringify(todos))
    
  }, [todos])

  const handleNewTodoChange = (event) => {
    // event.preventDefault()
    setNewTodo(event.target.value)
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
      <h1 className='py-3'>Todolist</h1>
      <form>
        <div className="row flex-wrap">
          <div className="col-10">
            <input type="text" className='form-control' value={newTodo} onChange={handleNewTodoChange}/>
          </div>
          <div className="col-2">
            <button type='submit' className='btn btn-dark' onClick={handleAddTodo}>Add Todo</button>
          </div>
        </div>
      </form>
    </div>
    
    {/* List todo */}
    <div className="container text-center">
      <ul className='todos list-unstyled'>
        {
          todos.map((todo, index) => (
            <li className='todo row' key={index}>
              <div className="col-10 fs-5">
                <div>{todo}</div>
              </div>
              <div className="col-2">
                <button className='btn btn-danger' onClick={() => handleTodoDelete(index)}>Delete</button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>

    </>
  )
}

export default App

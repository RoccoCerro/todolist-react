import './scss/App.scss'
import { useState, useEffect } from 'react'
import HeaderComponent from './components/HeaderComponent'

function App() {
  
  const [todos, setTodos] = useState(() => {
    // Retrieve todos list from localStorage
    const savedTodos = localStorage.getItem('todos');
    // Return the todos list if present
    return savedTodos ? JSON.parse(savedTodos) : [];
  })

  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    // I update the todos list in localStorage every time the todos array changes
    localStorage.setItem('todos' , JSON.stringify(todos))    

  }, [todos])

  // Retrieve the input value
  const handleNewTodoChange = (event) => {
    // event.preventDefault()
    setNewTodo(event.target.value)
  }

  // Add todo
  const handleAddTodo = (event) => {
    event.preventDefault()
    if (newTodo === '') return

    // I format the new todo with the first letter in capital letters
    const stringFormatted = newTodo.trim().charAt(0).toUpperCase() + newTodo.trim().slice(1)
    const arrayObj = {
      text: stringFormatted.trim(),
      isBarred: false
    }

    setTodos([...todos, arrayObj])
    setNewTodo('') 
  }

  // Delete todo
  const handleTodoDelete = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  // Manage a completed todo
  const todoCompleted = (index) => {

    const newTodos = todos.map((el, i) => {
      if(i === index){
        return el = {
          text: el.text,
          isBarred: !el.isBarred
        }
      }else{
        return el
      }
    })

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
                <div onClick={() => todoCompleted(index)} className={todos[index].isBarred ? 'todo-barred' : ''}>{todo.text}</div>
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

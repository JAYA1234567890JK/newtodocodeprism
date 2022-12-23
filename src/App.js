import {useState} from 'react'
import Header from './components/Header'
import Form from './components/Form'

import './App.css'

const App = () => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const completedTodoList = todos.filter(item => item.isCompleted === true)
  // console.log(todos)
  return (
    <div className="conatiner">
      <div className="app-container">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      </div>
      <div className="task-compated">
        <h1 className="task-todo">
          Completed Task - {completedTodoList.length}
        </h1>
        {completedTodoList.map(item => (
          <li className="complete-list" key={item.id}>
            {item.title}
          </li>
        ))}
      </div>
    </div>
  )
}

export default App

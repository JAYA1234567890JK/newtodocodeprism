import {v4 as uuidv4} from 'uuid'
import {IoMdCheckmark, IoMdTrash} from 'react-icons/io'

import './index.css'

const Form = ({input, setInput, todos, setTodos}) => {
  const onChangeInput = e => {
    setInput(e.target.value)
  }

  const onHandleSubmit = e => {
    e.preventDefault()
    if (input.length !== 0) {
      setTodos([...todos, {id: uuidv4(), title: input, isCompleted: false}])
    } else {
      alert('Enter valid input')
    }

    setInput('')
  }

  const deleteTodo = id => {
    const deletList = todos.filter(item => item.id !== id)
    setTodos(deletList)
  }

  const onCompleteHandilar = id => {
    const completeTodos = todos.map(item => {
      if (item.id === id) {
        return {...item, isCompleted: true}
      }
      return item
    })
    setTodos(completeTodos)
  }

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="Enter a Todo..."
          className="task-input"
          value={input}
          onChange={onChangeInput}
        />
        <button type="submit" className="button-add">
          Add
        </button>
      </form>

      {todos.map(item => (
        <li className="todo-list" key={item.id}>
          <p
            className={
              item.isCompleted === true
                ? 'completed-todo'
                : 'not-conpleted-todo'
            }
          >
            {item.title}
          </p>
          <div className="button-container">
            <button
              type="button"
              className="btn"
              onClick={() => onCompleteHandilar(item.id)}
            >
              <IoMdCheckmark className="icon-comp" />
            </button>
            <button
              className="btn"
              type="button"
              onClick={() => deleteTodo(item.id)}
            >
              <IoMdTrash />
            </button>
          </div>
        </li>
      ))}
    </>
  )
}

export default Form

import React, { useEffect, useState } from 'react';
import './App.css';
import EditForm from './components/EditForm';
import InputForm from './components/InputForm';
import Select from './components/Select';
import TodoArray from './components/TodoArray';

type Todo = {
  id: number
  title: string
  status: string
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [todoTitle, setTodoTitle] = useState('')
  const [todoId, setTodoId] = useState(todos.length + 1)
  const [isEditable, setIsEditable] = useState(false)
  const [editId, setEditId] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [filter, setFilter] = useState('notStarted')
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([])

  const handleEditFormChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value)
  }

  const handleEditTodo = () => {
    const newArray = todos.map((todo) =>
      todo.id === Number(editId) ? { ...todo, title: newTitle } : todo)
    setTodos(newArray)
    setEditId('')
    setNewTitle('')
    handleCloseEditForm()
  }

  const handleCloseEditForm = () => {
    setIsEditable(false)
    setEditId('')
  }

  useEffect(() => {
    const filteringTodos = () => {
      switch (filter) {
        case 'notStarted':
          setFilteredTodos(todos.filter((todo) => todo.status === 'notStarted'))
          break
        case 'inProgress':
          setFilteredTodos(todos.filter((todo) => todo.status === 'inProgress'))
          break
        case 'done':
          setFilteredTodos(todos.filter((todo) => todo.status === 'done'))
          break
        default:
          setFilteredTodos(todos)
      }
    }
    filteringTodos()
  }, [filter, todos])

  return (
    <div className="App">
      {isEditable ? (
        <EditForm
          newTitle={newTitle}
          handleEditFormChanges={handleEditFormChanges}
          handleEditTodo={handleEditTodo}
          handleCloseEditForm={handleCloseEditForm}
        />
      ) : (
        <div>
          <InputForm
            todos={todos}
            setTodos={setTodos}
            todoId={todoId}
            setTodoId={setTodoId}
            todoTitle={todoTitle}
            setTodoTitle={setTodoTitle}
          />
          <br />
          <Select
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      )}
      <TodoArray
        todos={todos}
        setTodos={setTodos}
        setIsEditable={setIsEditable}
        setEditId={setEditId}
        setNewTitle={setNewTitle}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;

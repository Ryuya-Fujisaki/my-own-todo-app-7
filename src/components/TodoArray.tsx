import React from 'react'

const styleButton = {
    margin: '5px'
}

type Todo = {
    id: number;
    title: string;
    status: string;
};

type TodoArrayProps = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;
    setEditId: React.Dispatch<React.SetStateAction<string>>;
    setNewTitle: React.Dispatch<React.SetStateAction<string>>;
    filteredTodos: Todo[];
};

const TodoArray: React.FC<TodoArrayProps> = ({ todos, setTodos, setIsEditable, setEditId, setNewTitle, filteredTodos }) => {
    const handleStatusChange = (targetTodo: Todo, e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(targetTodo)

        const newArray = todos.map((todo) => todo.id === targetTodo.id ? { ...todo, status: e.target.value } : todo
        )
        setTodos(newArray)
    }

    const handleOpenEditForm = (todo: Todo) => {
        setIsEditable(true)
        setEditId(todo.id.toString())
        setNewTitle(todo.title)
    }

    const handleDeleteTodo = (targetTodo: Todo) => {
        setTodos(todos.filter((todo) => todo !== targetTodo))
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <ol>
                {filteredTodos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.title}</span>
                        <select
                            style={{ margin: '5px' }}
                            value={todo.status}
                            onChange={(e) => handleStatusChange(todo, e)}
                        >
                            <option value="notStarted">未着手</option>
                            <option value="inProgress">作業中</option>
                            <option value="done">完了</option>
                        </select>
                        <button style={styleButton} onClick={() => { handleOpenEditForm(todo) }}>編集</button>
                        <button style={styleButton} onClick={() => { handleDeleteTodo(todo) }}>削除</button>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default TodoArray

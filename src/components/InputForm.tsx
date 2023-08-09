import React from 'react'

type Todo = {
    id: number
    title: string
    status: string
}

type InputFormProps = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    todoId: number;
    setTodoId: React.Dispatch<React.SetStateAction<number>>;
    todoTitle: string;
    setTodoTitle: React.Dispatch<React.SetStateAction<string>>;
}

const InputForm: React.FC<InputFormProps> = ({
    todos,
    setTodos,
    todoId,
    setTodoId,
    todoTitle,
    setTodoTitle,
}) => {
    const handleAddFormChanges = (e: React.ChangeEvent<HTMLInputElement>) => { setTodoTitle(e.target.value) }

    const handleAddTodo = () => {
        if (todoTitle === '') { return; }
        setTodos([...todos, { id: todoId, title: todoTitle, status: 'notStarted' }])
        setTodoId(todoId + 1)
        setTodoTitle('')
    }

    return (
        <div style={{ marginTop: '20px' }}>
            <input
                type="text"
                placeholder="タイトル"
                value={todoTitle}
                onChange={handleAddFormChanges}
            />
            <button onClick={handleAddTodo}>作成</button>
        </div>
    )
}

export default InputForm

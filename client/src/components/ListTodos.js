import React, {Fragment, useState, useEffect} from "react";
import EditTodo from "./EditTodo";

const ListTodo = () => {
    const [todos, setTodos] = useState([])
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json()
            setTodos(jsonData)
        } catch (error) {
            console.error(error)
        }
    }

    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"

            })

            setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch (error) {
            console.error(error)
        }
    }

    // const editTodo = async (id, description) => {
    //     try {
    //         const response = await fetch(`http://localhost:5000/todos/${id}`, {
    //             method: "PUT"
    //         })
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    useEffect(() => {
        getTodos()
    },[])

    return (
        <Fragment>
            {" "}
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Описание</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td>
                                <EditTodo />
                            </td> {/* подумать над тем как редачить через клиента йоу */}
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Удалить</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListTodo

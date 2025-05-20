import React, {Fragment, useState, useEffect} from "react";
import EditTodo from "./EditTodo";
import EditModal from "./EditModal";
import "./ListTodos.css"

const ListTodo = () => {
    const [todos, setTodos] = useState([])
    const [todoToEdit, setTodoToEdit] = useState(null)
    const [editText, setEditText] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingTodo, setEditingTodo] = useState(null)

    const handleOpenEditModal = (todo) => {
        setEditingTodo(todo)
        setEditText(todo.description)
        setIsModalOpen(true)
    }
    const handleCloseEditModal = () => {
        setIsModalOpen(false)
        setEditingTodo(null)
        setEditText("")
    }
    const handleEditTextChange = (e) => {
        setEditText(e.target.value)
    }

    const handleSaveEdit = async () => {
        if (!editingTodo || editText.trim() === ""){
            alert("Ошибка")
            return
        }
        if (editText.trim() === editingTodo.description){
            handleCloseEditModal()
            return
        }
        try {
            const body = {description: editText.trim()};
            const response = await fetch(`http://localhost:5000/todos/${editingTodo.todo_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            console.log(response)
            setTodos(todos.map(t =>
                t.todo_id === editingTodo.todo_id ? { ...t, description: editText.trim()} : t
            ));
        } catch (error) {
            console.error(error)
        }
    }


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
                        <th>Удалить
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td className="col-10 description">{todo.description}</td>
                            <td className="col-2">
                                <button className="btn btn-warning" onClick={() => handleOpenEditModal(todo)}>
                                    Редактировать
                                </button>
                            </td> {/* подумать над тем как редачить через клиента йоу */}
                            <td className="col-2">
                                <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Удалить</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <EditModal
                isOpen={isModalOpen}
                onClose={handleCloseEditModal}
                todo={editingTodo}
                editText={editText}
                onEditTextChange={handleEditTextChange}
                onSave={handleSaveEdit}
            />
        </Fragment>
    )
}

export default ListTodo

const express = require('express')
const app = express();
const cors = require('cors')
const pool = require('./db')

app.use(cors())
app.use(express.json())

// create todo | get all | get todo | update todo | delete todo

app.post("/todos", async(req, res) => {
    try {
        const {description} = req.body
        const newTodo = await pool.query ("INSERT INTO todo (description) VALUES($1)", [description])

        res.json(newTodo)
    } catch (error) {
        console.error(error)
    }
})

app.get("/todos", async(req, res) => {
    try {
        const alltodos = await pool.query ("SELECT * FROM todo")
        res.json(alltodos.rows)
    } catch(error) {
        console.error(error)
    }
})

app.get("/todos/:id", async(req, res) => {
    try {
        const {id} = req.params
        const todo = await pool.query ("SELECT * FROM todo WHERE todo_id = $1", [id])
        res.json(todo.rows)
    } catch(error) {
        console.error(error)
    }
})

app.delete("/todos/:id", async(req, res) => {
    try {
        const {id} = req.params
        const todo = await pool.query ("DELETE FROM todo WHERE todo_id = $1", [id])
        res.json("ID deleted")
    } catch(error) {
        console.error(error)
    }
})

app.delete("/todos", async(req, res) => {
    try {
        const todo = await pool.query ("DELETE FROM todo")
        res.json("ALL deleted")
    } catch(error) {
        console.error(error)
    }
})


app.put("/todos/:id", async(req, res) => {
    try {
        const {id} = req.params
        const {description} = req.body
        const updatetodo = await pool.query ("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
        res.json("Updated")
    } catch(error) {
        console.error(error)
    }
})



app.listen(5000, ()=>{
    console.log('Server start 5000')
})

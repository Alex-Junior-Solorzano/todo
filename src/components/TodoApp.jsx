import React, { useState } from 'react'
import Todo from './Todo';

import '../styles/todoApp.css'

const TodoApp = () => {
    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState([]);

    const hadleClick = (e) => {
        e.preventDefault();
        setTitle('Alex')
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setTitle(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }
        const temp = [...todos];
        temp.unshift(newTodo);
        setTodos(temp);

        setTitle('');

    }

    const handleUpdate = (id, value) => {
        const temp = [...todos];
        const item = temp.find(item=> item.id === id);
        item.title = value;
        setTodos(temp);
    }

    const handleDelete = (id) =>{
        const temp = todos.filter(item => item.id !== id);
        setTodos(temp);

    }

    return (
        <div className='todoContainer'>
            <div className='titulo'>
                <img className='logo'
                  src= {require(`../images/k2.png`)}
                  alt='Logo'
                />
                <h1>Lista de Tareas 📝</h1>
            </div>
            <form className='todoCreateForm' onSubmit={handleSubmit}>
                <input className='todoInput' value={title} onChange={handleChange}/>
                <input className='buttonCreate' onClick={handleSubmit} type="submit" value="Create todo" />
                
            </form>
            <div className='todosContainer'>
                {
                    todos.map(item =>(
                        <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                    ))
                }
            </div>
        </div>
    )
}

export default TodoApp
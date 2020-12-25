import React from 'react';
import TaskView from './TaskView.jsx';

const TodoList = () => {
    const todos = [{
            id: 1,
            text: 'Cook the lunch',
            done: false
        },
        {
            id: 2,
            text: 'Bake a cake',
            done: true
        },
    ];

    return (
        todos.map(task => {
            return <TaskView key = {
                task.id
            }
            task = {
                task
            }
            />
        })
    );
}

export default TodoList
import React from 'react';
import Todo from './Todo.js';

export default function List (props) {
    let list = props.tasks.map((e,i) => {
        return (
            <Todo key={i} tasks={e} />
        )
    })

    return (
        <div>
            { list }
        </div>
    )
}
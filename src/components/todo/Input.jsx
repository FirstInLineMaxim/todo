import { ADD_TODO, GET_TODO } from '@/src/Redux/redux_types/todoConstants'
import { createTodo } from '@/src/Redux/asyncDispatch/dbTodoFunc'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Input() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()


    const handleChange = e => {
        setValue(e.target.value)
    }
    function addTodo(e) {
        if (e.key === 'Enter') {
            if (value !== '') {
                dispatch(createTodo({ title: value, content: '', checked: false }))
            }
        }

    }

    return (
        <input type='text' value={value} onChange={(e) => handleChange(e)} onKeyDown={(e) => addTodo(e)} />
    )
}

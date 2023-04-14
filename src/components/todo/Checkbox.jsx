import { checkedTodo } from '@/src/db/dbTodoFunc'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function Checkbox({ checked, id }) {
  const dispatch = useDispatch()
  const handleChecked = () => {
    dispatch(checkedTodo(id))
  }
  return (
    <input type="checkbox" name="checkbox" id="" checked={checked} onChange={() => handleChecked()} />
  )
}

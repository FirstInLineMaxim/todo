import { deleteTodo, fetchTodos } from "@/src/Redux/asyncDispatch/dbTodoFunc";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "./Checkbox";
import { Trash } from "styled-icons/bootstrap";
import { Item } from "../StyledListItem";
import { Text } from "../StyledTypographie";

export default function TodoList() {
    const todos = useSelector(state => state.todo)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTodos())
    }, [])
    return (
        <div >
            <div >
                {todos.length === 0 && <p>Add Something!</p>}
                {todos?.map(({ title, content, id, checked }) => (


                    <Item key={id}>
                        <Text fontSize={[3, 4, 5]} style={{ textDecoration: checked && 'line-through' }} >{title}</Text>
                        <p fontSize={[1, 2, 3]}>{content}</p>
                        <Checkbox checked={checked} id={id} />
                        <Trash width={20} onClick={() => dispatch(deleteTodo(id))} />
                    </Item>


                ))}
            </div>
        </div>
    );
}

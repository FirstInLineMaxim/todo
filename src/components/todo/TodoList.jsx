import { fetchTodos } from "@/src/db/dbTodoFunc";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "./Checkbox";

export default function TodoList() {
    const todos = useSelector(state => state.todo)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTodos())
    }, [])
    return (
        <div >
            <div >
                {todos?.map(({ title, content, id, checked }) => (


                    <div key={id}>
                        <p >{title}</p>
                        <p >{content}</p>
                        <Checkbox checked={checked} id={id} />
                    </div>


                ))}
            </div>
        </div>
    );
}

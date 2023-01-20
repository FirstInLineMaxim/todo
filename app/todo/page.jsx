import PocketBase from 'pocketbase';
async function todos() {
    const db = new PocketBase('http://127.0.0.1:8090')
    const data = await db.collection('todo').getList()
    return data.items
}
export default async function TodoPage() {
    const todo = await todos()
    return (
        <div>
            {todo.map(({ title, content }) => (<><p>{title}</p>
                <p>{content}</p></>))}
        </div>
    )
}

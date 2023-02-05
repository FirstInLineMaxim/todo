import PocketBase from "pocketbase";
import styles from "./page.module.css";
async function todos() {
  const db = new PocketBase("http://127.0.0.1:8090");
  const data = await db.collection("todo").getList();
  return data.items;
}
export default async function TodoPage() {
  const todo = await todos();
  return (
    <div className={styles.container}>
      <div className={styles.maincontent}>
        {todo.map(({ title, content }) => (
          <>
            <div className={styles.todoContainer}>
              <p className={styles.todoTitle}>{title}</p>
              <p className={styles.todoDescription}>{content}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

"use client"
import { Flex } from "@/src/components/StyledLayout";
import Input from "@/src/components/todo/Input";
import TodoList from "@/src/components/todo/TodoList";


export default function TodoPage() {
  return (
    <>
      <Flex width={[1, 1 / 2]} flexDirection='column' mx={'auto'} >

        <Input />
        <TodoList />
      </Flex>
    </>
  );
}

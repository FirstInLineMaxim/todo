"use client"
import { Flex } from '@/src/components/StyledLayout'
import { Heading1, Text } from '@/src/components/StyledTypographie'
import styled from 'styled-components';
import { space, layout, typography, color } from 'styled-system';
const Container = styled.div`
  ${layout}
  ${typography}
  ${color}
`;

const Heading = styled.h1`
  ${space}
  ${typography}
  ${color}
`;

const Paragraph = styled.p`
  ${space}
  ${typography}
  ${color}
`;

const UnorderedList = styled.ul`
  ${space}
  ${layout}
`;

const ListItem = styled.li`
  ${typography}
  ${color}
`;

const Strong = styled.strong`
  ${typography}
  ${color}
`;
export default function Home() {
  return (
    <main>
      <div >
        <Flex flexDirection='column' p={4}>
          <Heading fontSize={[6, 7, 8]} mb={4}>Todo List Application</Heading >
          <Paragraph fontSize={3} mb={2}>Welcome to the Todo List application! This app is built using several modern web technologies that work together to provide a seamless user experience:</Paragraph>
          <UnorderedList>
            <ListItem fontSize={2} ><Strong fontWeight='bold'>Pocketbase:</Strong> a cloud-hosted database service that allows for efficient and secure storage of application data.</ListItem>
            <ListItem fontSize={2} ><Strong fontWeight='bold'>Redux:</Strong> a predictable state container for JavaScript apps, which provides a central location for storing and updating application state.</ListItem>
            <ListItem fontSize={2} ><Strong fontWeight='bold'>redux-thunk:</Strong> a middleware for Redux that allows for handling asynchronous actions and side effects.</ListItem>
            <ListItem fontSize={2} ><Strong fontWeight='bold'>styled-components:</Strong> a CSS-in-JS library that allows for creating and styling React components using plain CSS syntax.</ListItem>
            <ListItem fontSize={2} ><Strong fontWeight='bold'>styled-system:</Strong> a library that provides a theming and styling API for styled-components, allowing for easy and consistent styling across an application.</ListItem>
          </UnorderedList>
          <Paragraph fontSize={2}>By using these technologies together, we are able to create a robust and scalable web application that can handle complex data and user interactions with ease. Whether you are a casual user looking to keep track of your daily tasks, or a power user who needs to manage complex projects, this Todo list app has got you covered. Try it out today and see how these technologies can transform your web development workflow!</Paragraph>
        </Flex>
      </div>
    </main>
  )
}


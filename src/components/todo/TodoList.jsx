import { deleteTodo, fetchTodos } from "@/src/Redux/asyncDispatch/dbTodoFunc";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "./Checkbox";
import { Arrow90degRight, ArrowRight, Trash } from "styled-icons/bootstrap";
import { Item } from "../StyledListItem";
import { Text } from "../StyledTypographie";
import styled from "styled-components";
import { Flex } from "../StyledLayout";
import { ArrowRightOutline } from "styled-icons/evaicons-outline";
import { fontSize, space } from "styled-system";
const InputContainer = styled.div`
  position: relative;
  margin-bottom: 30px;
`;
const Label = styled.label`
  position: absolute;
  top: -10px;
  left: 10px;
  color: #aaa;
  transition: all 0.5s;
  transform-origin: top left;
  pointer-events: none;
`;
const OpenDetails = styled(ArrowRightOutline)`
${space}
transition: all 0.5s;
${props => props.showDetails && "transform:rotate(90deg)"}
`
const Input = styled.div`
display: flex;
justify-content: space-between;
color: inherit;
width:100%;
  padding: 10px;
  height: fit-content;
  border: 2px solid #0B2447;
  border-top: none;
  border-bottom: none;
  font-size: 16px;
  background: transparent;
  outline: none;
  box-shadow: 7px 7px 0px 0px #0B2447;
  transition: all 0.5s;

  &:focus {
    box-shadow: none;
    border:2px solid black;
    transition: all 0.5s;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    height: 2px;
    width: 0;
    bottom: 0;
    transition: all 0.5s;
    background-color: #0B2447;
  }

  &:before {
    right: 50%;
  }

  &:after {
    left: 50%;
  }

  &:focus:before,
  &:focus:after {
    width: 50%;
  }

  &:focus:before {
    transition-delay: 0.1s;
  }

  &:focus:after {
    transition-delay: 0.3s;
  }

  &:focus ~ ${Label} {
    top: -15px;
    transform: scale(0.8);
    color: ${({ theme }) => theme.isLight ? ' #0B2447' : '#aaa'};
  }
  & ${OpenDetails}:checked{
    height: 500px;
  }
`;



const Paragraph = styled.p`
${fontSize}
${space}
`

export default function TodoList() {
  const [showDetails, setShowDetails] = useState(false)
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
          <InputContainer key={id}>
            <Input >
              <Flex alignItems='flex-start'  >
                <Flex>
                  {content && <OpenDetails showDetails={showDetails} width={30} onClick={() => setShowDetails(!showDetails)} />}
                  <Checkbox checked={checked} id={id} />
                </Flex>
                <Flex flexDirection='column'>


                  <Text fontSize={[3, 4, 5]} style={{ textDecoration: checked && 'line-through' }} >{title}</Text>

                  {(showDetails && content) && <Paragraph mt={3} fontSize={[1, 2, 3]}>{'content'}</Paragraph>}
                </Flex>
              </Flex>
              <Trash width={30} onClick={() => dispatch(deleteTodo(id))} />

            </Input>
          </InputContainer>


        ))}
      </div>
    </div>
  );
}

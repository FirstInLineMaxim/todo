import { createTodo } from '@/src/Redux/asyncDispatch/dbTodoFunc'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components';
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
const Input = styled.input`
color: inherit;
width:100%;
  padding: 10px;
  height: 40px;
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
`;



export default function TodoInput() {
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
        <InputContainer>
            <Input type="text" value={value} onChange={(e) => handleChange(e)} onKeyDown={(e) => addTodo(e)} />
            <Label>Write Something</Label>
        </InputContainer>

        // <InputContainer>
        //     <Input type="text" />
        //     <Label>Write a task</Label>
        //     <Topline className="topline" />
        //     <Underline className="underline" />
        // </InputContainer>
        // <input type='text' value={value} onChange={(e) => handleChange(e)} onKeyDown={(e) => addTodo(e)} />
    )
}

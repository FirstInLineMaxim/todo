import { checkedTodo } from '@/src/Redux/asyncDispatch/dbTodoFunc'
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { height, width } from 'styled-system'
const CheckboxBtn = styled.label`
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  cursor: pointer;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  font-size: 14px;

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border: ${({ theme }) => theme.isLight ? '2.5px solid black' : '2.5px solid white'};
    transition: .2s linear;
  }

  input:checked ~ .checkmark {
    background-color: transparent;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    visibility: hidden;
    opacity: 0;
    left: 50%;
    top: 40%;
    width: 10px;
    height: 14px;
    border: 2px solid #0ea021;
    filter: drop-shadow(0px 0px 10px #0ea021);
    border-width: 0 2.5px 2.5px 0;
    transition: .2s linear;
    transform: translate(-50%, -50%) rotate(-90deg) scale(0.2);
  }

  input:checked ~ .checkmark:after {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
    animation: pulse 1s ease-in;
  }

  input:checked ~ .checkmark {
    transform: rotate(45deg);
    border: 2px solid #0ea02186;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: translate(-50%, -50%) rotate(0deg) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) rotate(0deg) scale(1.6);
    }
  }
`;
export default function Checkbox({ checked, id }) {
  const dispatch = useDispatch()
  const handleChecked = () => {
    dispatch(checkedTodo(id))
  }
  return (
    // <Input type="checkbox" name="checkbox" id="" checked={checked} onChange={() => handleChecked()} />
    <CheckboxBtn>
      <input type="checkbox" name="checkbox" id="" checked={checked} onChange={() => handleChecked()} />
      <span className="checkmark"></span>
    </CheckboxBtn>
  )
}

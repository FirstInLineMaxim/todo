"use client "
import React from 'react'
import styled from "styled-components"
// const Button = styled.button`
//   background: ${({ theme }) => theme.background};
//   border: 2px solid ${({ theme }) => theme.toggleBorder};
//   color: ${({ theme }) => theme.text};
//   border-radius: 30px;
//   cursor: pointer;
//   font-size:0.8rem;
//   padding: 0.6rem;
//   `

const Switch = styled.div`
  display: block;
  position: relative;
  width: ${props => props.width || '3.5em'};
  height: ${props => props.height || '2em'};
  --width-of-switch: ${props => props.width || '3.5em'};
  --height-of-switch: ${props => props.height || '2em'};
  --size-of-icon: ${props => props.iconSize || '1.4em'};
  --slider-offset: ${props => props.sliderOffset || '0.3em'};

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f4f4f5;
    transition: .4s;
    border-radius: 30px;

    &:before {
      position: absolute;
      content: "";
      height: var(--size-of-icon);
      width: var(--size-of-icon);
      border-radius: 20px;
      left: var(--slider-offset);
      top: 50%;
      transform: translateY(-50%);
      background: linear-gradient(40deg,#ff0080,#ff8c00 70%);
      transition: .4s;
    }
  }

  input:checked + .slider {
    background-color: #303136;

    &:before {
      left: calc(100% - (var(--size-of-icon) + var(--slider-offset)));
      background: #303136;
      box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
    }
  }
`;


const Toggle = ({ theme, toggleTheme }) => {
    return (
        <Switch onClick={() => toggleTheme()}>
            <input type="checkbox" checked={theme} onChange={toggleTheme} />
            <span className="slider" />
        </Switch>
    )
}

export default Toggle;

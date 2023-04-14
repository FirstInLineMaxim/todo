const { default: styled } = require("styled-components");

const Button = styled.button`
 width: 6.5em;
 height: 2.3em;
 margin: 0.5em;
 background: ${({ theme }) => theme.body == '#FFF' ? '#363537' : '#FFF'};
 color: ${({ theme }) => theme.text == '#363537' ? '#FAFAFA' : '#363537'};
 border: none;
 border-radius: 0.625em;
 font-size: 20px;
 font-weight: bold;
 cursor: pointer;
 position: relative;
 z-index: 1;
 overflow: hidden;

 &:hover{
    color:${(props) => props.theme.text};
 }

&:after{
     content: "";
 background: ${(props) => props.theme.body};
 position: absolute;
 z-index: -1;
 left: -20%;
 right: -20%;
 top: 0;
 bottom: 0;
 transform: skewX(-45deg) scale(0, 1);
 transition: all 0.5s;
}

&:hover::after{
     transform: skewX(-45deg) scale(1, 1);
 -webkit-transition: all 0.5s;
 transition: all 0.5s;
}
`

export { Button }
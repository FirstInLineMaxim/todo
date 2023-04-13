import styled from "styled-components"
import { color, fontSize } from "styled-system"

const Heading1 = styled.h1`
${color}
${fontSize}
font-size: 8rem;
  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
`
const Text = styled.p`
  ${fontSize}
`
export { Heading1, Text }
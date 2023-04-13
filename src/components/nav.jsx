"use client"
import Link from "next/link";
import React from "react";
import Toggle from "./StyledSwitch";
import styled from 'styled-components'
import { space, layout, color, flex } from 'styled-system'
const Box = styled.div`
  ${space};
  ${layout};
  ${color};
  box-sizing: 'border-box';
  min-width:  0;
  `
const Flex = styled(Box)`
    display: flex;
${flex}
  `
export function Navbar({ themeToggler, theme }) {
  return (
    <>
      <Flex p={4} mb={3} width={[1, 1 / 2]}>
        <Box bg="tomato">
          <Link href="/">Home</Link>
          <Link href="/todo">Todos</Link>
        </Box>
        <Toggle toggleTheme={themeToggler} theme={theme} />
      </Flex>
    </>
  );
}

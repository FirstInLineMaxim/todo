"use client"
import Link from "next/link";
import React from "react";
import Toggle from "./StyledSwitch";
import styled from 'styled-components'
import { space, layout, color, flex, flexbox } from 'styled-system'
import { Redux } from "styled-icons/boxicons-logos";
import { Button } from "./StyledButtons";
const Box = styled.div`
  ${space};
  ${layout};
  ${color};
  box-sizing: 'border-box';
  min-width:  0;
  `
const Flex = styled(Box)`
display: flex;
    ${flexbox}
  `
export function Navbar({ themeToggler, theme }) {
  return (
    <>
      <Flex py={2} mb={3} width={[1]} justifyContent='space-between' alignItems='center' >
        <Redux width={'40px'} />
        <Flex width={[1, 1 / 2]} justifyContent='center' alignItems='center' >
          <Link href="/"><Button>
            Home
          </Button></Link>
          <Link href="/todo"><Button>
            Todo's
          </Button></Link>
        </Flex>
        <Toggle toggleTheme={themeToggler} theme={theme} />
      </Flex>
    </>
  );
}

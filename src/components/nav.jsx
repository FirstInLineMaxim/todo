import Link from "next/link";
import React from "react";
import Toggle from "./StyledSwitch";
import { Redux } from "styled-icons/boxicons-logos";
import { Button } from "./StyledButtons";
import { Flex } from "./StyledLayout";

export function Navbar({ themeToggler, darkmode }) {
  return (
    <>
      <Flex py={2} mb={3} width={[1, 1 / 1.2]} justifyContent='space-between' alignItems='center' mx={'auto'}>
        <Redux width={'40px'} />
        <Flex width={[1, 1 / 2]} justifyContent='center' alignItems='center' >
          <Link href="/"><Button>
            Home
          </Button></Link>
          <Link href="/todo"><Button>
            Todo's

          </Button></Link>
        </Flex>
        <Toggle toggleTheme={themeToggler} darkmode={darkmode} />
      </Flex>
    </>
  );
}

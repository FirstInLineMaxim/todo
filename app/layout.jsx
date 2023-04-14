"use client"
import { ThemeProvider } from 'styled-components'
import { Nav, Navbar } from '../src/components/nav'
import { darkTheme, lightTheme, } from '@/src/theme/theme'
import { useState } from 'react'
import { ResetCSS } from '@/src/theme/ResetCSS'
import { GlobalStyles } from '@/src/theme/GlobalStyles'
import RootProvider from '@/src/Redux/providers/RootProvider'
import StyledComponentsRegistry from '@/src/Context/StyledComponentsRegistry'
export default function RootLayout({ children }) {

  const [darkmode, setDarkmode] = useState(() => JSON.parse(localStorage.getItem('darkmode')) || false);
  const themeToggler = () => {
    setDarkmode(!darkmode)
    localStorage.setItem('darkmode', !darkmode)
  }


  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>

      </head>
      <body>
        <StyledComponentsRegistry>

          <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
            <RootProvider>

              <ResetCSS />
              <GlobalStyles />
              <Navbar themeToggler={themeToggler} darkmode={darkmode} />
              {children}
            </RootProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html >
  )

}



"use client"
import { ThemeProvider } from 'styled-components'
import { Nav, Navbar } from '../src/components/nav'
import { darkTheme, lightTheme, } from '@/src/theme/theme'
import { useState } from 'react'
import { ResetCSS } from '@/src/theme/ResetCSS'
import { GlobalStyles } from '@/src/theme/GlobalStyles'

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState(false);
  const themeToggler = () => {
    console.log('first')
    setTheme(!theme)
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
        <ResetCSS />
        <ThemeProvider theme={theme ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Navbar themeToggler={themeToggler} theme={theme} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

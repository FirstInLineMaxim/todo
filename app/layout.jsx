import { ThemeProvider } from 'styled-components'
import { Nav } from '../src/components/nav'
import './globals.css'
import { theme } from '@/src/theme/theme'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ThemeProvider theme={theme}>

          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

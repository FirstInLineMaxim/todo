import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav> <Link href="/">Home</Link>
          <Link href="/notes">Notes</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}

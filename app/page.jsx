"use client"
import { Heading1, Text } from '@/src/components/StyledTypographie'

export default function Home() {
  return (
    <main>
      <div >
        <div >
          <Heading1 fontSize={[6, 7, 8]}>Hello World!</Heading1>
          <Text fontSize={[3, 4, 5]} > test</Text>
        </div>
      </div>
    </main>
  )
}

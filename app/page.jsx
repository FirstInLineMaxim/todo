"use client"
import { Flex } from '@/src/components/StyledLayout'
import { Heading1, Text } from '@/src/components/StyledTypographie'

export default function Home() {
  return (
    <main>
      <div >
        <Flex flexDirection='column'>
          <Heading1 fontSize={[6, 7, 8]}>Hello World!</Heading1>
          <Text fontSize={[3, 4, 5]} > test</Text>
        </Flex>
      </div>
    </main>
  )
}

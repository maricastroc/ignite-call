/* eslint-disable @next/next/no-img-element */
import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import PreviewImgLarge from '../../assets/app_preview_large.png'
import Image from 'next/image'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Hassle-free Scheduling
        </Heading>
        <Text>
          Sync your calendar and allow individuals to schedule appointments
          during your available time slots.
        </Text>
        <ClaimUsernameForm />
      </Hero>
      <Preview>
        <Image
          src={PreviewImgLarge}
          height={400}
          alt="Calendar symbolizing application in operation"
          quality={100}
          priority
        />
      </Preview>
    </Container>
  )
}

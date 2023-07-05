import { Button, Heading, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
// import { api } from "../../../lib/axios"
import { Container, Header } from '../styles'
import { ConnectBox, ConnectItem } from './styles'
import { MultiStepComponent } from '@/components/MultiStep'

export default function Register() {
  // async function handleRegister() {

  // }

  return (
    <Container>
      <Header>
        <Heading as="strong">Connect your schedule!</Heading>
        <Text>
          Connect your calendar to automatically check for busy times and new
          events as they are scheduled.
        </Text>

        <MultiStepComponent size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button variant="secondary" size="sm">
            Connect
            <ArrowRight />
          </Button>
        </ConnectItem>

        <Button type="submit">
          Next Step
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}

import { ArrowRight } from 'phosphor-react'
import { Form, FormAnnotation } from './styles'
import { Button, TextInput, Text } from '@ignite-ui/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// criando parâmetros de validação
const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must contain at least three letters.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Username can only contain letters and hyphens.',
    })
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }
  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="your user"
          {...register('username')}
        ></TextInput>
        <Button size="sm" type="submit">
          Reserve
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <Text size="sm" className={errors.username ? 'error' : ''}>
          {errors.username ? errors.username.message : 'Digit your username'}
        </Text>
      </FormAnnotation>
    </>
  )
}

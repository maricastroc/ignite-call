import { ArrowRight } from 'phosphor-react'
import { Form, FormAnnotation } from './styles'
import { Button, TextInput, Text } from '@ignite-ui/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'

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
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  const router = useRouter()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    const { username } = data

    await router.push(`/register?username=${username}`)
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
        <Button size="sm" type="submit" disabled={isSubmitting}>
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

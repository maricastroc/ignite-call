import { Box, Text, styled } from '@ignite-ui/react'

export const IntervalBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
})

export const IntervalsContainer = styled('div', {
  border: '1px solid $gray600',
  borderRadius: '$md',
  marginBottom: '$4',
})

export const IntervalItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$4',
  justifyContent: 'center',
  padding: '$6 $4',

  '& + &': {
    borderTop: '1px solid $gray600',
  },

  '@media (min-width: 500px)': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '$3 $4',
    gap: 0,
  },
})

export const IntervalDay = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
})

export const IntervalInputs = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  '> div': {
    maxWidth: '7rem',

    input: {
      fontSize: '0.75rem',
    },
  },

  'input::-webkit-calendar-picker-indicator': {
    filter: 'invert(100%) brightness(40%)',
  },

  '@media (min-width: 330px)': {
    '> div': {
      maxWidth: '100%',

      input: {
        fontSize: '0.9rem',
      },
    },
  },
})

export const FormError = styled(Text, {
  color: '#f75a68',
  marginBottom: '$4',
})

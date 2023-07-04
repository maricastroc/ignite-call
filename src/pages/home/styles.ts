import { styled, Heading, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  gap: '$20',
  marginLeft: 'auto',

  '@media(max-width: 980px)': {
    gap: '$12',
  },

  '@media(max-width: 768px)': {
    justifyContent: 'center',
  },
})

export const Hero = styled('div', {
  maxWidth: 480,
  padding: '0 $16',

  [`> ${Text}`]: {
    marginTop: '$4',
    color: '$gray200',
  },

  '@media(max-width: 980px)': {
    [`> ${Heading}`]: {
      fontSize: '$6xl',
    },

    [`> ${Text}`]: {
      fontSize: '$lg',
    },
  },

  '@media(max-width: 768px)': {
    padding: '0 $8',
    maxWidth: 'clamp(310px, 90vw, 500px)',
  },

  '@media(max-width: 360px)': {
    textAlign: 'center',
    [`> ${Heading}`]: {
      fontSize: '$5xl',
    },

    [`> ${Text}`]: {
      fontSize: '$md',
    },
  },
})

export const Preview = styled('div', {
  paddingRight: '$8',
  overflow: 'hidden',

  '@media(max-width: 768px)': {
    display: 'none',
  },
})

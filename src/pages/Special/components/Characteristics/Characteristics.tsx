import React from 'react'
import { Container } from '../../../../components'
import { Quality, Uniqueness } from './components'

export const Characteristics: React.FC = () => {
  return (
    <Container>
      <Uniqueness />
      <Quality />
    </Container>
  )
}

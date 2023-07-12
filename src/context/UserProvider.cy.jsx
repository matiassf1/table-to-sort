import React from 'react'
import { UserProvider } from './UserProvider'

describe('<UserProvider />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UserProvider />)
  })
})
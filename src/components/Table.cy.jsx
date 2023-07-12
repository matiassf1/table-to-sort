import React from 'react'
import { Table } from './Table'

describe('<Table />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Table />)
  })
})
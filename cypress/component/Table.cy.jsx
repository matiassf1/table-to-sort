import { Table } from "../../src/components/Table"
import { MockedUserProvider } from "../../test-utils"

/* eslint-disable no-undef */
describe('Table.cy.jsx', () => {
  it('playground', () => {
    cy.mount(
      <MockedUserProvider>
        <Table/>
      </MockedUserProvider>
    )
  })
})
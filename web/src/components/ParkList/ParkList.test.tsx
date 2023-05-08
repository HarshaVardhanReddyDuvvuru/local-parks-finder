import { render } from '@redwoodjs/testing/web'

import ParkList from './ParkList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ParkList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ParkList />)
    }).not.toThrow()
  })
})

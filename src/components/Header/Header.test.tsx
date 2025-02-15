import { render, screen } from '@testing-library/react'
import { Header } from '.'

describe('<Header />', () => {
  it("should render header component", () => {
    render(<Header />)
    expect(screen.getByText("Header")).toBeInTheDocument()
  })
})
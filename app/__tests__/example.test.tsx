import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Example Test', () => {
  it('renders a heading', () => {
    // Arrange
    render(<h1>Hello, World!</h1>)
    
    // Act
    const heading = screen.getByRole('heading', { level: 1 })
    
    // Assert
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Hello, World!')
  })
})
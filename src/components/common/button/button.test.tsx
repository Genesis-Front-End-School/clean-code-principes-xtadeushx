import { render, screen } from '@testing-library/react';
import Button from './button';

describe('Button component', () => {
  it('renders button with correct data-test-id and children props', () => {
    render(<Button type="button" dataTestId="my-test-id">Click me!</Button>);

    // expect(screen.getByTestId('my-test-id')).toBeInTheDocument();
    expect(screen.getByText('Click me!')).toHaveAttribute('type', 'button');
    expect(screen.getByText('Click me!')).toBeInTheDocument();
  });

  it('renders button with default type prop', () => {
    render(<Button type="button" dataTestId="my-test-id">Click me!</Button>);

    expect(screen.getByText('Click me!')).toHaveAttribute('type', 'button');
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('renders button with additional className prop', () => {
    render(<Button type="button" dataTestId="my-test-id" className="my-custom-class">Click me!</Button>);


    expect(screen.getByText('Click me!')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('my-custom-class');
  });

});
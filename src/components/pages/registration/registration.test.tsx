
import { render, screen } from '@testing-library/react';
import { Registration } from './registration';

describe('Registration', () => {
  it('renders the registration text', () => {
    render(<Registration />);
    const registrationText = screen.getByText(/registration/i);
    expect(registrationText).toBeInTheDocument();
  });
});
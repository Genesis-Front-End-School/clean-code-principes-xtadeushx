import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

jest.mock('react-icons/ai', () => ({
  AiFillGithub: () => <svg data-testid="mock-github-icon" />,
}));

describe('Footer component', () => {
  it('renders the correct text', () => {
    render(<Footer />);

    const text = screen.getByText('@copyriting');

    expect(text).toBeInTheDocument();
  });

  it('renders the link with the correct href', () => {
    render(<Footer />);

    const link = screen.getByText('Best IT courses');

    expect(link).toHaveAttribute(
      'href',
      'https://github.com/xtadeushx?tab=repositories'
    );
  });

  it('renders the GitHub icon', () => {
    render(<Footer />);

    const icon = screen.getByTestId('mock-github-icon');

    expect(icon).toBeInTheDocument();
  });

  it('opens the link in a new tab', () => {
    render(<Footer />);

    expect(screen.getByText(/Best IT courses/)).toHaveAttribute('target', '_blank');
  });
});

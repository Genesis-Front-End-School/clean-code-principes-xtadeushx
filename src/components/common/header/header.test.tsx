import { render, screen } from '@testing-library/react';
import { Header } from './header';

// Mocking the NavLink component
jest.mock('../../../hooks/hooks', () => ({
  NavLink: ({ to, className, children }: any) => (
    <a href={to} className={className}>
      {children}
    </a>
  ),
}));
jest.mock('../../common/menu/menu.tsx', () => ({
  Menu: ({ user, logOut, children }: any) => <span>{user}</span>,
}));
describe('Header component', () => {
  const user = {
    name: 'John',
    email: 'john@example.com',
  };
  it('renders the logo and menu', () => {
    render(<Header user={user.name} logOut={() => {}} />);

    const logo = screen.getByText('Best Courses');
    expect(logo).toHaveAttribute('href', '/');
    expect(logo).toBeInTheDocument();

    const span = screen.getByText('John');
    expect(span).toBeInTheDocument();
  });
});

import { render, fireEvent, screen } from '@testing-library/react';
import { Menu } from './menu';

jest.mock('react-icons/md', () => ({
  MdOutlineLanguage: () => <svg data-testid="mock-language-icon" />,
}));
jest.mock('react-icons/cg', () => ({
  CgProfile: () => <svg data-testid="mock-profile-icon" />,
}));

jest.mock('../../../hooks/hooks', () => ({
  NavLink: ({ children, ...rest }: any) => <a {...rest}>{children}</a>,
}));

describe('Menu component', () => {
  it('renders correctly', () => {
    render(<Menu />);
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  it('calls the logOut function when the Sign Out link is clicked', () => {
    const logOutMock = jest.fn();
    render(<Menu logOut={logOutMock} />);

    const signOutLink = screen.getByText('Sign Out');
    fireEvent.click(signOutLink);

    expect(logOutMock).toHaveBeenCalled();
  });
});

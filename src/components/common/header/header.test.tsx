// import { render, screen } from '@testing-library/react';
// // Mock the NavLink component from the 'hooks/hooks' module
// jest.mock('../../../hooks/hooks.tsx', () => ({
//   NavLink: ({ to, children }: { to: string; children: React.ReactNode }) => (
//     <a href={to}>{children}</a>
//   ),
// }));

// import { Header } from './header';
// describe('Header component', () => {
//   it('renders the logo and menu', () => {
//     const user = {
//       username: 'testuser',
//       email: 'testuser@example.com',
//     };
//     const logOut = jest.fn();
//     render(<Header user={user} logOut={logOut} />);
//     const logo = screen.getByTestId('header-logo');
//     const menu = screen.getByRole('button', { name: 'Menu' });
//     expect(logo).toBeInTheDocument();
//     expect(menu).toBeInTheDocument();
//   });

//   it('calls the logOut function when the menu item is clicked', () => {
//     const user = {
//       username: 'testuser',
//       email: 'testuser@example.com',
//     };
//     const logOut = jest.fn();
//     render(<Header user={user} logOut={logOut} />);
//     const menuItem = screen.getByRole('menuitem', { name: 'Log out' });
//     menuItem.click();
//     expect(logOut).toHaveBeenCalled();
//   });
// });
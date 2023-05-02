import { screen, render } from '@testing-library/react';
import { Menu } from './menu';

describe('menu component', () => {
  const user = {
    name: 'John',
    email: 'john@example.com',
  };
  it('should render with provided props', () => {
    render(<Menu user={user.name} logOut={() => console.log('logout')} />);


    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
});

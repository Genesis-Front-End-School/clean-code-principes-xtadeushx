import { screen, render } from '@testing-library/react';
import { Login } from './login';

describe('login component', () => {
  it('should render correctly', () => {
    render(<Login />);

    expect(screen.getByText('login')).toBeInTheDocument();
  });
});

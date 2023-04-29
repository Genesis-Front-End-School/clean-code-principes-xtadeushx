import { screen, render } from '@testing-library/react';

import { NotFoundPage } from './not-found-page';

describe('NotFoundPage component', () => {
  it('should render successfully', () => {
    render(<NotFoundPage />);

    expect(screen.getByText('This page does not found')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    render(<NotFoundPage />);

    expect(screen.getByText('This page does not found')).toMatchSnapshot();
  });

  it('should have class name', () => {
    render(<NotFoundPage />);

    expect(screen.getByText('This page does not found')).toHaveClass(
      'not-found-page'
    );
  });
});

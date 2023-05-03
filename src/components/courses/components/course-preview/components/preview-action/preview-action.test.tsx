import { render, screen } from '@testing-library/react';
import { PreviewAction } from './preview-action';

jest.mock('react-icons/ai', () => ({
  AiOutlineLike: () => <svg data-testid="mock-like-icon" />,
  AiOutlineDislike: () => <svg data-testid="mock-dislike-icon" />,
}));

describe('PreviewAction component', () => {
  it('should render the like and dislike icons', () => {
    render(<PreviewAction />);

    expect(screen.getByTestId('mock-like-icon')).toBeInTheDocument();
    expect(screen.getByTestId('mock-dislike-icon')).toBeInTheDocument();
  });

  it('should render the like and dislike counts', () => {
    render(<PreviewAction />);

    expect(screen.getAllByText('0')).toHaveLength(2);
  });
});

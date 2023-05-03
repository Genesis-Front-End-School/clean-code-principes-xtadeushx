import { render, screen } from '@testing-library/react';
import { PreviewAction } from './preview-action';

// Mock the react-icons/ai module
jest.mock('react-icons/ai', () => ({
  AiOutlineLike: 'mock-like-icon',
  AiOutlineDislike: 'mock-dislike-icon',
}));

describe('PreviewAction', () => {
  it('should render the like and dislike icons', () => {
    const { container } = render(<PreviewAction />);
    expect(container).toMatchSnapshot();
    expect(container.querySelector('.mock-like-icon')).toBeInTheDocument();
    expect(container.querySelector('.mock-dislike-icon')).toBeInTheDocument();
  });

  it('should render the like and dislike counts', () => {
    render(<PreviewAction />);
    expect(screen.getAllByText('0')).toHaveLength(2);
  });
});

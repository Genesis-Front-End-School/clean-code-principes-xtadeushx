import { render, screen } from '@testing-library/react';
import { useFetch, useParams } from '../../../../hooks/hooks';
import { CourseDetails } from './course-details';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

jest.mock('../../../../hooks/hooks', () => ({
  ...jest.requireActual('../../../../hooks/hooks'),
  useFetch: jest.fn(),
}));

describe('CourseDetails', () => {
  it('renders spinner when loading', () => {
    (useParams as jest.Mock).mockReturnValue({ id: '1' });
    (useFetch as jest.Mock).mockReturnValue({ loading: 'pending' });
    render(<CourseDetails />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});

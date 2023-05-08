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

  // it('renders error message on error', () => {
  //   (useParams as jest.Mock).mockReturnValue({ id: '1' });
  //   (useFetch as jest.Mock).mockReturnValue({
  //     loading: 'failed',
  //     error: new Error('Failed to fetch'),
  //   });

  //   render(<CourseDetails />);
  //   expect(
  //     screen.getByText('Server response with  Error: Failed to fetch')
  //   ).toBeInTheDocument();
  // });

  // it('renders course info on success', () => {
  //   const course = {
  //     id: '1',
  //     title: 'Test Course',
  //     description: 'This is a test course',
  //     instructor: 'John Doe',
  //     duration: 10,
  //     publishDate: new Date(),
  //   };
  //   (useParams as jest.Mock).mockReturnValue({ id: '1' });
  //   (useFetch as jest.Mock).mockReturnValue({
  //     loading: 'succeeded',
  //     response: course,
  //   });

  //   render(<CourseDetails key={33} />);
  //   expect(screen.getByText('Test Course')).toBeInTheDocument();
  // });
});

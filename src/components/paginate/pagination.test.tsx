import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PaginatedCourses } from './pagination';
import { course } from '../../services/services';
import { coursesMock } from '../../../__mocks__/coursesMock';

jest.mock('../../services/services');

describe('PaginatedCourses component', () => {
  beforeEach(() => {
    (course.getAllCourses as jest.Mock).mockClear();
  });

  it('should render an error message when no courses are found', async () => {
    (course.getAllCourses as jest.Mock).mockResolvedValueOnce({ courses: [] });
    render(<PaginatedCourses itemsPerPage={2} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Nothing have been found')).toBeInTheDocument();
    });
  });
  it('should render an error message when an error occurs', async () => {
    (course.getAllCourses as jest.Mock).mockRejectedValueOnce(
      new Error('Server error')
    );
    render(<PaginatedCourses itemsPerPage={2} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByText('Server response with Error: Server error')
      ).toBeInTheDocument();
    });
  });
});

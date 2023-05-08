import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ReactPaginate from 'react-paginate';
import { ICourseList, TLoadingStatus } from 'common/types/coursesList.types';
import { PaginatedCourses } from './pagination';
import { coursesMock } from '../../../__mocks__/coursesMock';

describe('PaginatedCourses', () => {
  const mockItemsPerPage = 2;
  const mockLoadingStatus: TLoadingStatus = 'idle';
  const mockError = null;

  it('renders courses and pagination correctly', async () => {
    render(
      <PaginatedCourses
        itemsPerPage={mockItemsPerPage}
        courses={coursesMock}
        loading={mockLoadingStatus}
        error={mockError}
      />
    );

    expect(screen.getByText('Course 1')).toBeInTheDocument();
    expect(screen.getByText('Course 2')).toBeInTheDocument();
    expect(screen.queryByText('Course 3')).not.toBeInTheDocument();
    expect(screen.getByText('1').parentElement).toHaveClass('selected');

    const nextPageButton = screen.getByTitle('Next');
    userEvent.click(nextPageButton);

    await waitFor(() => {
      expect(screen.getByText('Course 3')).toBeInTheDocument();
    });

    expect(screen.getByText('2').parentElement).toHaveClass('selected');

    const previousPageButton = screen.getByTitle('Previous');
    userEvent.click(previousPageButton);
    await waitFor(() => {
      expect(screen.getByText('Course 1')).toBeInTheDocument();
      expect(screen.getByText('Course 2')).toBeInTheDocument();
    });
    expect(screen.getByText('1').parentElement).toHaveClass('selected');
  });

  it('renders spinner when loading is pending', () => {
    render(
      <PaginatedCourses
        itemsPerPage={mockItemsPerPage}
        courses={coursesMock}
        loading={'pending'}
        error={mockError}
      />
    );

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders error message when error exists', () => {
    const mockError = new Error('Server error');
    render(
      <PaginatedCourses
        itemsPerPage={mockItemsPerPage}
        courses={coursesMock}
        loading={mockLoadingStatus}
        error={mockError}
      />
    );

    expect(
      screen.getByText('Server response with Error: Server error')
    ).toBeInTheDocument();
  });
});

import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { useFetch } from '../../../../hooks/hooks';
import { CourseDetails } from './course-details';
import { ENV } from 'common/enums/enums';

jest.mock('../../../../hooks/hooks');

const mockCourse = {
  id: 1,
  title: 'Test Course',
  description: 'This is a test course.',
  thumbnail: 'test.jpg',
  duration: 100,
};

describe('CourseDetails', () => {
  it('should render course info after loading', async () => {
    (useFetch as jest.Mock).mockReturnValue({
      loading: 'fulfilled',
      response: mockCourse,
      error: null,
    });

    const { getByText } = render(<CourseDetails />);

    await waitFor(() =>
      expect(useFetch).toHaveBeenCalledWith(`${ENV.API_PATH}/undefined`, 'id')
    );

    expect(getByText('Test Course')).toBeInTheDocument();
    expect(getByText('This is a test course.')).toBeInTheDocument();
    expect(getByText('100 minutes')).toBeInTheDocument();
  });

  it('should render error message if there is an error', async () => {
    (useFetch as jest.Mock).mockReturnValue({
      loading: 'fulfilled',
      response: null,
      error: '500 Internal Server Error',
    });

    const { getByText } = render(<CourseDetails />);

    await waitFor(() =>
      expect(useFetch).toHaveBeenCalledWith(`${ENV.API_PATH}/undefined`, 'id')
    );

    expect(
      getByText('Server response with  500 Internal Server Error')
    ).toBeInTheDocument();
  });

  it('should render spinner while loading', async () => {
    (useFetch as jest.Mock).mockReturnValue({
      loading: 'pending',
      response: null,
      error: null,
    });

    const { getByTestId } = render(<CourseDetails />);

    await waitFor(() =>
      expect(useFetch).toHaveBeenCalledWith(`${ENV.API_PATH}/undefined`, 'id')
    );

    expect(getByTestId('spinner')).toBeInTheDocument();
  });
});

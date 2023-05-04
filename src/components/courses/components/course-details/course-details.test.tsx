import { render } from '@testing-library/react';
import { useFetch } from '../../../../hooks/hooks';
import { CourseDetails } from './course-details';

jest.mock('../../../../hooks/hooks');


jest.mock('../course-info/course-info.tsx', () => ({
  CourseInfo: jest
    .fn()
    .mockReturnValue(<div data-testid="course-info"></div>),
}));

describe('CourseDetails', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  const mockUseFetch = useFetch as jest.MockedFunction<typeof useFetch>;

  it('should render loading spinner while data is being fetched', () => {
    mockUseFetch.mockReturnValue({
      loading: 'pending',
      response: null,
      error: null,
    });

    const { getByTestId } = render(<CourseDetails />);
    expect(getByTestId('spinner')).toBeInTheDocument();
  });

  it('should render error message if fetch fails', () => {
    const error = new Error('Failed to fetch data');
    mockUseFetch.mockReturnValue({
      loading: 'idle',
      response: null,
      error,
    });

    const { getByText } = render(<CourseDetails />);
    expect(
      getByText(`Server response with ${error.toString()}`)
    ).toBeInTheDocument();
  });

  it('should render course details if fetch is successful', () => {
    const course = {
      id: 1,
      name: 'React Fundamentals',
      description: 'Learn React basics',
      startDate: '2023-06-01',
      duration: 60,
      authors: [{ id: 1, name: 'John Doe' }],
    };
    mockUseFetch.mockReturnValue({
      loading: 'idle',
      response: { course },
      error: null,
    });

    const { getByText } = render(<CourseDetails />);
    expect(getByText(course.name)).toBeInTheDocument();
    expect(getByText(course.description)).toBeInTheDocument();
    expect(getByText(course.startDate)).toBeInTheDocument();
    expect(getByText(`${course.duration} min`)).toBeInTheDocument();
    expect(getByText(course.authors[0].name)).toBeInTheDocument();
  });
});

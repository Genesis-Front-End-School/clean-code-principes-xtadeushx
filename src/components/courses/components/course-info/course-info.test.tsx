import { render, screen } from '@testing-library/react';
import { CourseInfo } from './course-info';
import { mockCourse } from '../../../../../__mocks__/courseMock';

jest.mock('../course-content/course-content.tsx', () => ({
  CourseContent: () => <div data-testid="course-content"></div>,
}));
jest.mock('../course-preview/course-preview.tsx', () => ({
  CoursePreview: () => <div data-testid="course-preview"></div>,
}));

describe('CourseInfo', () => {
  it('renders course title', () => {
    render(<CourseInfo course={mockCourse} />);
    const titleElement = screen.getByText(mockCourse.title);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders course rating', () => {
    render(<CourseInfo course={mockCourse} />);
    const ratingElement = screen.getByText(`${mockCourse.rating}`);
    expect(ratingElement).toBeInTheDocument();
  });

  it('renders course preview', () => {
    render(<CourseInfo course={mockCourse} />);
    const previewElement = screen.getByTestId('course-preview');
    expect(previewElement).toBeInTheDocument();
  });

  it('renders course content', () => {
    render(<CourseInfo course={mockCourse} />);
    const contentElement = screen.getByTestId('course-content');
    expect(contentElement).toBeInTheDocument();
  });
});

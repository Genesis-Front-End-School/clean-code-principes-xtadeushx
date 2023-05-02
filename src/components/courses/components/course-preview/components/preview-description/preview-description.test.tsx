import { render, screen } from '@testing-library/react';
import { PreviewDescription } from './preview-description';

jest.mock('../../../course-description/course-description', () => ({
  CourseDescription: jest
    .fn()
    .mockReturnValue(<div data-testid="course-description"></div>),
}));

jest.mock('../../../course-skills/course-skills', () => ({
  CourseSkills: jest
    .fn()
    .mockReturnValue(<div data-testid="course-skills"></div>),
}));

describe('PreviewDescription', () => {
  const props = {
    lessons: [],
    launchDate: '2023-05-01T00:00:00.000Z',
    courseDuration: 10,
    description: 'Test description',
    meta: {
      skills: ['skill1', 'skill2'],
    },
  };

  it('should render course description', () => {
    render(<PreviewDescription {...props} />);
    const courseDescription = screen.getByTestId('course-description');
    expect(courseDescription).toBeInTheDocument();
  });

  it('should render course skills', () => {
    render(<PreviewDescription {...props} />);
    const courseSkills = screen.getByTestId('course-skills');
    expect(courseSkills).toBeInTheDocument();
  });
});

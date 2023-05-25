import { screen, render } from '@testing-library/react';
import { CourseDescription } from './course-description';

describe('CourseDescription component', () => {
  const props = {
    duration: 60,
    lessonsCount: 10,
    launchDate: '2023-05-01T00:00:00.000Z',
  };

  it('should render the correct duration', () => {
    render(<CourseDescription {...props} />);
    const durationText = screen.getByText(`DURATION`);
    expect(durationText).toBeInTheDocument();
  });

  it('should render the correct lessons count', () => {
    render(<CourseDescription {...props} />);
    const lessonsText = screen.getByText(`${props.lessonsCount} videos`);
    expect(lessonsText).toBeInTheDocument();
  });

  it('should render the correct language', () => {
    render(<CourseDescription {...props} />);
    const languageText = screen.getByText('English');
    expect(languageText).toBeInTheDocument();
  });

  it('should render the correct launch date', () => {
    render(<CourseDescription {...props} />);
    const launchDateText = screen.getByText(`5/1/2023`);
    expect(launchDateText).toBeInTheDocument();
  });
});

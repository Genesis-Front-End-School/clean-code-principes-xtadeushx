import { screen, render } from '@testing-library/react';
import { CourseDescription } from './course-description';

// jest.mock('react-icons/md', () => ({
//   MdOutlineLanguage: () => <svg data-testid="mock-language-icon" />,
//   MdOutlineDateRange: () => <svg data-testid="mock-date-icon" />,
// }));

// jest.mock('react-icons/ai', () => ({
//   AiOutlineClockCircle: () => <svg data-testid="mock-circle-icon" />,
//   AiOutlineVideoCamera: () => <svg data-testid="mock-camera-icon" />,
// }));

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
    const lessonsText = screen.getByText(
      `LESSONS ${props.lessonsCount} videos`
    );
    expect(lessonsText).toBeInTheDocument();
  });

  it('should render the correct language', () => {
    render(<CourseDescription {...props} />);
    const languageText = screen.getByText('Language English');
    expect(languageText).toBeInTheDocument();
  });

  it('should render the correct launch date', () => {
    render(<CourseDescription {...props} />);
    const launchDateText = screen.getByText(`ADDED DATE ${props.launchDate}`);
    expect(launchDateText).toBeInTheDocument();
  });
});

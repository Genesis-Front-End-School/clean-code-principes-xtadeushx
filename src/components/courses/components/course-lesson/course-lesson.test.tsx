import { render, screen } from '@testing-library/react';

import { CourseLesson } from './course-lesson';

describe('CourseLesson component', () => {
  const props = {
    id: 'ec7df2b9-2fe2-49b7-81e2-5b5df86997e3',
    title: 'Lack of challenges',
    duration: 275,
    order: 5,
  };

  it('should render correctly with props', () => {
    render(<CourseLesson {...props} />);

    expect(screen.getByText(`Lesson ${props.order}`)).toBeInTheDocument();
    expect(screen.getByText(`${props.title}`)).toBeInTheDocument();
  });

  it('displays the correct formatted duration', () => {
    const props = {
      id: '123',
      order: 1,
      duration: 3661,
      title: 'Introduction',
    };

    render(<CourseLesson {...props} />);

    expect(screen.getByText('01:01:01')).toBeInTheDocument();
  });
});

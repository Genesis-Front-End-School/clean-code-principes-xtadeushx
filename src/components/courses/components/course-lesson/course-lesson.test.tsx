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
  });
});

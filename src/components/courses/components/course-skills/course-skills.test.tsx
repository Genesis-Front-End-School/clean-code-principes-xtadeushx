import { render, screen } from '@testing-library/react';
import { CourseSkills } from './course-skills';
import { IMeta } from '../../../../common/types/coursesList.types';

describe('course skills component', () => {
  it('should render the component', () => {
    const meta: IMeta = {
      slug: 'string',
      skills: ['js', 'react', 'node'],
      courseVideoPreview: {
        link: 'string',
        duration: 60,
        previewImageLink: 'testLink.png',
      },
    };
    render(<CourseSkills meta={meta} className="active" />);

    const skillsList = screen.getByRole('list');

    expect(skillsList).toBeInTheDocument();
    expect(skillsList.childElementCount).toBe(3);
    expect(screen.getByText('js')).toBeInTheDocument();
  });

  it('does not render anything if skills are not defined', () => {
    const meta: IMeta = {
      slug: 'string',
      skills: [],
      courseVideoPreview: {
        link: 'string',
        duration: 60,
        previewImageLink: 'testLink.png',
      },
    };
    render(<CourseSkills meta={meta} className="active" />);

    expect(screen.queryByText('js')).toBeNull();
  });
});

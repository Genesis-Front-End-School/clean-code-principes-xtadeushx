import { render, screen } from '@testing-library/react';
import { CourseList } from './course-list';
import { ILesson } from '../../../../common/types/coursesList.types';

jest.mock('../course-lesson/course-lesson.tsx', () => ({
  CourseLesson: () => <div data-testid="course-lesson"></div>,
}));

describe('CourseList component', () => {
  const lessons: ILesson[] = [
    {
      id: '1',
      title: 'Lesson 1',
      duration: 60,
      order: 1,
      type: 'video',
      status: 'completed',
      link: 'https://example.com/lesson-1',
      previewImageLink: 'https://example.com/lesson-1-preview.jpg',
      meta: {
        skills: ['Skill 1', 'Skill 2'],
      },
    },
    {
      id: '2',
      title: 'Lesson 2',
      duration: 90,
      order: 2,
      type: 'quiz',
      status: 'in_progress',
      link: 'https://example.com/lesson-2',
      previewImageLink: 'https://example.com/lesson-2-preview.jpg',
      meta: {
        skills: ['Skill 3', 'Skill 4'],
      },
    },
  ];

  it('renders a list of lessons', () => {
    render(<CourseList lessons={lessons} />);

    expect(screen.getAllByTestId('course-lesson')).toHaveLength(2);
  });

  it('renders an empty list if no lessons are provided', () => {
    render(<CourseList lessons={[]} />);

    expect(screen.queryByText('Lesson 1')).not.toBeInTheDocument();
  });
});

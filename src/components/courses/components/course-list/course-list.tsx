import { FC } from 'react';

import { Lesson } from 'common/types/course.types';
import { CourseLesson } from '../course-lesson/course-lesson';

import styles from './course-content.module.scss';

interface ICourseListProps {
  lessons: Lesson[];
}

const CourseList: FC<ICourseListProps> = ({ lessons }) => {
  return (
    <ul className={styles['course__lessons-list']}>
      {
        lessons?.map((lesson) => (
          <CourseLesson key={lesson.id} lesson={lesson} />
        ))}
    </ul>
  )
}

export { CourseList };
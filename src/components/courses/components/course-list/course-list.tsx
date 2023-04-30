import { FC } from 'react';

import { ILesson } from 'common/types/coursesList.types';
import { CourseLesson } from '../course-lesson/course-lesson';

import styles from './course-list.module.scss';

interface ICourseListProps {
  lessons: ILesson[];
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
import { ILesson } from '../../../../common/types/coursesList.types';
import { CourseLesson } from '../course-lesson/course-lesson';

import styles from './course-list.module.scss';

interface ICourseListProps {
  lessons: ILesson[];
}

const CourseList: React.FC<ICourseListProps> = ({ lessons }) => {
  return (
    <ul className={styles['course__lessons-list']}>
      {lessons?.map(({ id, order, title, duration }) => (
        <CourseLesson
          key={id}
          duration={duration}
          id={id}
          order={order}
          title={title}
        />
      ))}
    </ul>
  );
};

export { CourseList };

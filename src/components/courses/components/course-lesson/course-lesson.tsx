import { ILesson } from '../../../../common/types/coursesList.types';
import { formateTime } from '../../../../helpers/helpers';

import styles from './course-lesson.module.scss';
interface ICourseLessonProps {
  id: string;
  order: number;
  duration: number;
  title: string;
}
const CourseLesson: React.FC<ICourseLessonProps> = ({
  order,
  duration,
  title,
  id,
}) => {
  return (
    <>
      <li className={styles['lesson']} key={id}>
        <div className={styles['lesson__title-wrapper']}>
          <p className={styles['lesson__title']}>Lesson {order}</p>
          <p className={styles['lesson__describe']}>{title}</p>
        </div>

        <p className={styles['lesson__duration']}>{formateTime(duration)}</p>
      </li>
      <hr />
    </>
  );
};

export { CourseLesson };

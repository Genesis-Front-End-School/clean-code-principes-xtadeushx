import { ICourse } from 'common/types/course.types';
import {
  AiOutlineDislike,
  AiOutlineLike,

} from 'react-icons/ai';
import styles from './course-info.module.scss';
import { CourseDescription } from '../course-description/course-description';
import { CourseSkills } from '../course-skills/course-skills';
import { CourseContent } from '../course-content/course-content';
import classNames from 'classnames';
import { CoursePreview } from '../course-preview/course-preview';

interface ICourseInfoProps {
  course: ICourse;
}

const CourseInfo: React.FC<ICourseInfoProps> = ({ course }) => {
  const {
    previewImageLink: poster,
    title,
    rating,
    lessons,
    launchDate,
    duration: courseDuration,
    description,
    meta,
  } = course;
  const { link, previewImageLink, duration } = course.lessons[0];
  return (
    <section className={styles['course']}>
      <div className="course__description">
        <h1 className={styles['course__title']}>{title}</h1>
        <h3 className={styles['rating']}>
          rating:
          <span>
            <span className={classNames({
              [styles.red]: rating < 3,
              [styles.yellow]: rating >= 3 && rating < 5,
              [styles.green]: rating >= 5,
            })}> {rating}
            </span>
          </span>
        </h3>
      </div>
      <CoursePreview/>
      <CourseContent duration={duration} link={link} lessons={course.lessons} />
    </section>
  );
};

export { CourseInfo };

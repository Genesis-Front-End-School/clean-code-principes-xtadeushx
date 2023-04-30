import { ICourse } from 'common/types/coursesList.types';

import { CourseContent } from '../course-content/course-content';
import classNames from 'classnames';
import { CoursePreview } from '../course-preview/course-preview';

import styles from './course-info.module.scss';

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
  const { link, duration } = course.lessons[0];
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
      <CoursePreview
        meta={meta}
        description={description}
        poster={poster}
        courseDuration={courseDuration}
        lessons={lessons}
        launchDate={launchDate} />
      <CourseContent duration={duration} link={link} lessons={course.lessons} />
    </section>
  );
};

export { CourseInfo };

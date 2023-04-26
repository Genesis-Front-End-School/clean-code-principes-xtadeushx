import { FC } from 'react';
import { CourseDescription } from '../course-description/course-description';
import { CourseSkills } from '../course-skills/course-skills';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

import styles from './course-preview.module.scss';
import { Lesson, Meta } from 'common/types/course.types';

interface ICoursePreviewProps {
  poster: string;
  lessons: Lesson[];
  meta: Meta;
  launchDate: string;
  courseDuration: number;
  description: string;
}

const CoursePreview: FC<ICoursePreviewProps> = ({ poster, lessons, launchDate, courseDuration, description, meta }) => {
  return (
    <div className={styles['course__preview-info']}>
      <div className={styles['course__preview-img']}>
        <img src={poster + '/cover.webp'} alt="title" />
        <div className={styles['course__preview-action']}>
          <span>
            <AiOutlineLike className={styles.like} /> 0
          </span>
          <span>
            <AiOutlineDislike className={styles.disLike} /> 0
          </span>
        </div>
      </div>
      <div className={styles['course__preview-description']}>
        <CourseDescription
          lessons={lessons}
          launchDate={launchDate}
          duration={courseDuration}
        />
        <p className={styles['course__main-info']}>{description}</p>
        <CourseSkills meta={meta} className="light" />
      </div>
    </div>
  )
}

export { CoursePreview };
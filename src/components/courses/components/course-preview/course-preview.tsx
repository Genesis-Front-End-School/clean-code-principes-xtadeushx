import { FC } from 'react';
import { CourseDescription } from '../course-description/course-description';
import { CourseSkills } from '../course-skills/course-skills';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

import styles from './course-preview.module.scss';

const CoursePreview: FC = ({ poster, lessons, launchDate, courseDuration, description, meta }: any) => {
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
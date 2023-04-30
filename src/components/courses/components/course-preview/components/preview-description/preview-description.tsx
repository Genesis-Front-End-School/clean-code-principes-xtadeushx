import React, { FC } from 'react';
import { CourseDescription } from '../../../course-description/course-description'
import { CourseSkills } from '../../../course-skills/course-skills';

import styles from './preview-description.module.scss';
import { ICoursePreviewProps } from '../../course-preview';

type TPreviewDescriptionProps = Omit<ICoursePreviewProps, 'poster'>
const PreviewDescription: FC<TPreviewDescriptionProps> = ({
  lessons,
  launchDate,
  courseDuration,
  description,
  meta }) => {
  return (
    <div className={styles['course__preview-description']}>
      <CourseDescription
        lessons={lessons}
        launchDate={launchDate}
        duration={courseDuration}
      />
      <p className={styles['course__main-info']}>{description}</p>
      <CourseSkills meta={meta} className="light" />
    </div>
  )
}

export { PreviewDescription };
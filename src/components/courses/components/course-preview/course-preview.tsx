import { FC } from 'react';
import { PreviewDescription } from './components/preview-description/preview-description';
import { ILesson, IMeta } from 'common/types/coursesList.types';
import { PreviewAction } from './components/preview-action/preview-action';
import styles from './course-preview.module.scss';

export interface ICoursePreviewProps {
  poster: string;
  lessons: ILesson[];
  meta: IMeta;
  launchDate: string;
  courseDuration: number;
  description: string;
}

const CoursePreview: FC<ICoursePreviewProps> = ({
  poster,
  lessons,
  launchDate,
  courseDuration,
  description,
  meta }) => {
  return (
    <div className={styles['course__preview-info']}>
      <div className={styles['course__preview-img']}>
        <img src={poster + '/cover.webp'} alt="title" />
        <PreviewAction />
      </div>
      <PreviewDescription
        courseDuration={courseDuration}
        launchDate={launchDate}
        description={description}
        lessons={lessons}
        meta={meta} />
    </div>
  )
}

export { CoursePreview };
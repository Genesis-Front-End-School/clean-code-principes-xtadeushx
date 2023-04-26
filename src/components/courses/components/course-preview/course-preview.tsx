import { FC } from 'react';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { PreviewDescription } from './components/preview-description/preview-description';
import styles from './course-preview.module.scss';
import { ILesson, IMeta } from 'common/types/course.types';

export interface ICoursePreviewProps {
  poster: string;
  lessons: ILesson[];
  meta: IMeta;
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
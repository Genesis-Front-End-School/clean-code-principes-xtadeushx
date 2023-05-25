import { CustomVideoPlayer } from '../../../../components/common/video/video';
import { ILesson } from '../../../../common/types/coursesList.types';
import { CourseList } from '../course-list/course-list';
import styles from './course-content.module.scss';

interface ICourseContentProps {
  duration: number;
  link: string;
  poster?: string;
  lessons: ILesson[];
}
const CourseContent: React.FC<ICourseContentProps> = ({
  duration,
  link,
  poster = '',
  lessons,
}) => {
  return (
    <div className={styles['course__content']}>
      <div className={styles['course__content-video']}>
        <CustomVideoPlayer
          duration={duration}
          poster={poster}
          link={link}
          autoPlay={false}
          controls={true}
          muted={false}
        />
      </div>

      <CourseList lessons={lessons} />
    </div>
  );
};

export { CourseContent };

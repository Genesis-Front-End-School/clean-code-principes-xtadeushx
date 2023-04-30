import { useFetch, useParams } from 'hooks/hooks';
import { CourseInfo } from '../course-info/course-info';
import { ENV } from 'common/enums/enums';
import Spinner from 'components/common/loader/loader';

import styles from './course-details.module.scss';
import { ICourse, TLoadingStatus } from 'common/types/coursesList.types';

interface ICourseDetails {
  response: ICourse | null;
  error: Error | null;
  loading: TLoadingStatus;
}

const CourseDetails: React.FC = () => {
  const { id } = useParams();
  const {
    loading,
    response: course,
    error,
  } = useFetch<ICourseDetails>(`${ENV.API_PATH}/${id}`, 'id');

  if (loading === 'pending') return <Spinner isOverflowParent />;
  if (error) return <h3>{`Server response with  ${error?.toString()}`}</h3>;

  return (
    <div className={styles['course-page']}>
      {course ? <CourseInfo course={course} /> : null}
    </div>
  );
};

export { CourseDetails };

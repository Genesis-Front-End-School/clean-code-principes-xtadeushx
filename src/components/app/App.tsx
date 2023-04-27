import { Header } from 'components/common/header/header';
import { Footer } from 'components/common/footer/footer';
import { PaginatedCourses } from 'components/paginate/pagination';
import { Routes, Route, useFetch, useEffect, useState } from 'hooks/hooks';
import { AppRoute, ENV } from 'common/enums/enums';
import { NotFoundPage } from 'components/pages/not-found-page/not-found-page';
import { Registration } from 'components/pages/registration/registration';
import { Login } from 'components/pages/login/login';
import { CourseDetails } from 'components/courses/components/course-details/course-details';

import styles from './app.module.scss';
import { course } from 'services/services';
import { ICourse, ICourseList } from 'common/types/coursesList.types';

type TLoading = 'idle' | 'pending' | 'succeeded' | 'failed';

const enum LoadingStatus {
  IDLE = 'idle',
  PENDING = 'pending',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}
interface T {
  courses: ICourseList[]
}
const App = () => {
  const [courses, setCourses] = useState<T | []>([]);
  const [loading, setLoading] = useState<TLoading>('idle');
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = async () => {
    try {
      setLoading(LoadingStatus.PENDING)
      const data = await course.getAllCourses();

      if (!data.courses.length) {
        throw new Error('Something failed')
      }
      setCourses(data.courses);
      setLoading(LoadingStatus.SUCCEEDED);
    } catch (error: any) {
      setLoading(LoadingStatus.FAILED);
      setError(error)
    }
  }
  return (
    <div className={styles.app}>
      <Header logOut={() => console.log('log out')} user="Olexandr Unknown" />
      <Routes>
        <Route
          path={AppRoute.ROOT}
          element={
            <PaginatedCourses
              courses={courses}
              loading={loading}
              error={error}
              itemsPerPage={10}
            />
          }
        />
        <Route path={AppRoute.LOGIN} element={<Login />} />
        <Route path={AppRoute.REGISTRATION} element={<Registration />} />
        <Route path={AppRoute.ANY} element={<NotFoundPage />} />
        <Route path={AppRoute.COURSE_BY_ID} element={<CourseDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export { App };

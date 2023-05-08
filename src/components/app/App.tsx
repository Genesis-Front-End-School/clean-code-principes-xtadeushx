import { Header } from '../../components/common/header/header';
import { Footer } from '../../components/common/footer/footer';
import { PaginatedCourses } from '../../components/paginate/pagination';
import {
  Routes,
  Route,
  useFetch,
  useEffect,
  useState,
} from '../../hooks/hooks';
import { AppRoute, ENV } from '../../common/enums/enums';
import { NotFoundPage } from '../../components/pages/not-found-page/not-found-page';
import { Registration } from '../../components/pages/registration/registration';
import { Login } from '../../components/pages/login/login';
import { CourseDetails } from '../../components/courses/components/course-details/course-details';

import styles from './app.module.scss';
import { course } from '.././../services/services';
import { ICourseList } from '../../common/types/coursesList.types';

type LoadingStatus = 'idle' | 'pending' | 'succeeded' | 'failed';

interface ICoursesApp {
  courses: ICourseList[];
}

const App = (): JSX.Element => {
  const [courses, setCourses] = useState<ICourseList[] | null>(null);
  const [loading, setLoading] = useState<LoadingStatus>('idle');
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = async () => {
    try {
      setLoading('pending');
      const data = await course.getAllCourses();

      if (!data) {
        throw new Error('No courses found');
      }
      setCourses(courses);
      setLoading('succeeded');
    } catch (error: any) {
      setLoading('failed');
      setError(error);
    }
  };

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

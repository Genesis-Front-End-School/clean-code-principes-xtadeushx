import { ICourseList } from 'common/types/coursesList.types';
import { CoursesCard } from './components/courses-card/courses-card.components';
import styles from './courses-layout.module.scss';

interface ICoursesLayoutProps {
  courses: ICourseList[];
}

const CoursesLayout: React.FC<ICoursesLayoutProps> = ({ courses }) => {
  return (
    <>
      <section className={styles['course']}>
        <ul className={styles['course-list']}>
          {courses.map((el) => (
            <CoursesCard
              key={el.id}
              id={el.id}
              title={el.title}
              lessonsCount={el.lessonsCount}
              meta={el.meta}
              rating={el.rating}
              preview={el.previewImageLink}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export { CoursesLayout };

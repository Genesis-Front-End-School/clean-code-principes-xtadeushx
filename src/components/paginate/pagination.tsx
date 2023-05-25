import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import Spinner from '../common/loader/loader';
import { CoursesLayout } from '../courses/courses-layout';
import { ICourseList, TLoadingStatus } from 'common/types/coursesList.types';
import { course } from '../../services/services';

import styles from './pagination.module.scss';

interface IPaginatedItemsProps {
  itemsPerPage: number;
}

interface ICoursesProps {
  courses: ICourseList[];
}

const PaginatedCourses: React.FC<IPaginatedItemsProps> = ({ itemsPerPage }) => {
  const [courses, setCourses] = useState<ICourseList[] | null>(null);
  const [loading, setLoading] = useState<TLoadingStatus>('idle');
  const [error, setError] = useState<Error | null>(null);
  const [itemOffset, setItemOffset] = useState<number>(0);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = async () => {
    try {
      setLoading('pending');
      const data = await course.getAllCourses<ICoursesProps>();
      if (!data) {
        throw new Error('No courses found');
      }
      setCourses(data.courses);
      setLoading('succeeded');
    } catch (error: any) {
      setLoading('failed');
      setError(error);
    }
  };

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = courses ? courses.slice(itemOffset, endOffset) : [];
  const pageCount = Math.ceil((courses?.length || 0) / itemsPerPage);

  const handlePageClick = (selectedItem: { selected: number }) => {
    const newOffset =
      (selectedItem.selected * itemsPerPage) % (courses?.length || 0);
    setItemOffset(newOffset);
  };

  if (loading === 'pending' || loading === 'idle') {
    return <Spinner isOverflowParent />;
  }
  if (error) {
    return <h3>{`Server response with ${error.toString()}`}</h3>;
  }

  if (loading === 'succeeded' && courses?.length === 0) {
    return <h3>{`Nothing have been found`}</h3>;
  }

  return (
    <>
      <CoursesLayout courses={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        className={styles.pagination}
        activeClassName={styles.selected}
        nextClassName={styles.next}
        previousClassName={styles.previous}
        pageClassName={styles.page}
      />
    </>
  );
};

export { PaginatedCourses };

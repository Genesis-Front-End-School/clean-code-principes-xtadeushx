import ReactPaginate from 'react-paginate';
import { useState } from 'hooks/hooks';
import { CoursesLayout } from 'components/courses/courses-layout';
import { Course } from 'common/types/coursesList.types';
import Spinner from 'components/common/loader/loader';

import styles from './pagination.module.scss';

interface IPaginatedItemsProps {
  itemsPerPage: number;
  courses: Course[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: Error | null;
}

const PaginatedCourses: React.FC<IPaginatedItemsProps> = ({
  itemsPerPage,
  courses,
  loading,
  error,
}) => {
  const [itemOffset, setItemOffset] = useState<number>(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = courses.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(courses.length / itemsPerPage);

  const handlePageClick = (selectedItem: { selected: number }) => {
    const newOffset = (selectedItem.selected * itemsPerPage) % courses.length;
    setItemOffset(newOffset);
  };


  if (loading === 'pending') {
    return <Spinner isOverflowParent />;
  }
  if (error) {
    return <h3>{`Server response with ${error.toString()}`}</h3>;
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


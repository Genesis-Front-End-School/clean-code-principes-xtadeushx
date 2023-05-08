import ReactPaginate from 'react-paginate';
import { useState } from '../../hooks/hooks';
import Spinner from '../common/loader/loader';
import { CoursesLayout } from '../courses/courses-layout';

import styles from './pagination.module.scss';
import { ICourseList, TLoadingStatus } from 'common/types/coursesList.types';

interface IPaginatedItemsProps {
  itemsPerPage: number;
  courses: ICourseList[] | null;
  loading: TLoadingStatus;
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
  const currentItems = courses ? courses.slice(itemOffset, endOffset) : [];
  const pageCount = Math.ceil((courses?.length || 0) / itemsPerPage);

  const handlePageClick = (selectedItem: { selected: number }) => {
    const newOffset =
      (selectedItem.selected * itemsPerPage) % (courses?.length || 0);
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

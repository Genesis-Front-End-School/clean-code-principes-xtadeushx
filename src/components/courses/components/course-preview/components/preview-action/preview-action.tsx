import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

import styles from './preview-action.module.scss';

const PreviewAction = () => {
  return (
    <div className={styles['course__preview-action']}>
      <span>
        <AiOutlineLike className={styles.like} /> 0
      </span>
      <span>
        <AiOutlineDislike className={styles.disLike} /> 0
      </span>
    </div>
  )
}

export { PreviewAction };

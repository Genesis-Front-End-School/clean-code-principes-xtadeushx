import styles from './loader.module.scss';

export type TSpinner = {
  isOverflowParent: boolean;
};
const Spinner = ({ isOverflowParent }: TSpinner) =>
  isOverflowParent ? (
    <div className={styles.container}>
      <div className={styles.loader}>Loading...</div>
    </div>
  ) : (
    <div className={styles.loader}>Loading...</div>
  );

export default Spinner;

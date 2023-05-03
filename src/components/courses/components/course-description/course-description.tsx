import React, { PropsWithChildren } from 'react';
import { MdOutlineLanguage, MdOutlineDateRange } from 'react-icons/md';
import { AiOutlineClockCircle, AiOutlineVideoCamera } from 'react-icons/ai';

import { formateDate, formateTime } from '../../../../helpers/helpers';

import styles from './course-description.module.scss';

interface ICourseDescriptionProps {
  duration: number;
  lessonsCount: number;
  launchDate: string;
}
const CourseDescription: React.FC<
  ICourseDescriptionProps & PropsWithChildren
> = ({ duration, lessonsCount=0, launchDate }) => {
  return (
    <div className={styles['course__preview-duration']}>
      <div className={styles['course__preview-duration']}>
        <AiOutlineClockCircle className={styles.clock} />
        <p>
          DURATION <span>{formateTime(duration)}</span>
        </p>
      </div>
      <div className={styles['course__preview-duration']}>
        <AiOutlineVideoCamera className={styles.clock} />
        <p>
          LESSONS <span>{lessonsCount} videos</span>
        </p>
      </div>
      <div className={styles['course__preview-duration']}>
        <MdOutlineLanguage className={styles.clock} />
        <p>
          Language <span>English</span>
        </p>
      </div>
      <div className={styles['course__preview-duration']}>
        <MdOutlineDateRange className={styles.clock} />
        <p>
          ADDED DATE <span>{formateDate(launchDate)}</span>
        </p>
      </div>
    </div>
  );
};

export { CourseDescription };

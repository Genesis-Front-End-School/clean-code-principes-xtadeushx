import { useRef, useCallback } from 'react';
import ReactHlsPlayer from '@gumlet/react-hls-player';

import styles from './video.module.scss';

interface IPlayerProps {
  poster: string;
  duration: number;
  link: string;
  controls: boolean;
  autoPlay: boolean;
  muted: boolean;
}

const CustomVideoPlayer: React.FC<IPlayerProps> = ({
  poster,
  link,
  autoPlay,
  controls,
  muted,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (videoRef.current) {
      const videoPlayer = videoRef.current as HTMLVideoElement;
      videoPlayer.play();
    }
  }, [videoRef.current]);

  const handleMouseLeave = useCallback(() => {
    if (videoRef.current !== null) {
      const videoPlayer = videoRef.current;
      videoPlayer.pause();
    }
  }, [videoRef.current]);

  return (
    <ReactHlsPlayer
      src={link}
      autoPlay={autoPlay}
      controls={controls}
      width="100%"
      height="100%"
      playerRef={videoRef}
      poster={poster + '/cover.webp'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      muted={muted}
      className={styles.video}
    />
  );
};

export { CustomVideoPlayer };

import { useRef, useCallback } from 'react';
import styles from './video.module.scss';
import ReactPlayer from 'react-player';

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
    <ReactPlayer
      playerref={videoRef}
      playing={false}
      muted={muted}
      url={link}
      type="video/hls"
      className={styles.video}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      autoPlay={autoPlay}
      controls={controls}
      poster={poster}

      pip={true}
    />
  );
};

export { CustomVideoPlayer };

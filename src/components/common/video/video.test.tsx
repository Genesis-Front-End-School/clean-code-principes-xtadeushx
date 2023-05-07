import { render, fireEvent } from '@testing-library/react';
import { CustomVideoPlayer } from './video';

const mockProps = {
  poster: 'https://example.com/poster.jpg',
  link: 'https://example.com/video.mp4',
  autoPlay: false,
  controls: true,
  muted: true,
  duration: 3000,
};

describe('CustomVideoPlayer', () => {
  test('renders the video player with the correct props', () => {
    const { getByTestId } = render(<CustomVideoPlayer {...mockProps} />);
    const videoPlayer = getByTestId('video-player');
    expect(videoPlayer).toBeInTheDocument();
    expect(videoPlayer).toHaveAttribute('src', mockProps.link);
    expect(videoPlayer).toHaveAttribute(
      'poster',
      mockProps.poster + '/cover.webp'
    );
    expect(videoPlayer).toHaveAttribute('controls');
    expect(videoPlayer).toHaveAttribute('muted');
    expect(videoPlayer).not.toHaveAttribute('autoplay');
  });

  it('should pause video when mouse leaves the component', () => {
    const { getByTestId } = render(<CustomVideoPlayer {...mockProps} />);
    const video = getByTestId('video');

    fireEvent.mouseEnter(video);
    const videoPlayer = video.querySelector('video') as HTMLVideoElement;
    expect(videoPlayer.paused).toBeFalsy();

    fireEvent.mouseLeave(video);
    expect(videoPlayer.paused).toBeTruthy();
  });
});

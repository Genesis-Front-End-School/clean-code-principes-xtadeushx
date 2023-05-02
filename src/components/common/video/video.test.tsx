// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import ReactHlsPlayer from '@gumlet/react-hls-player';
// import { useRef } from 'react';
// import { CustomVideoPlayer } from './video';

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useRef: jest.fn(),
// }));

// jest.mock('@gumlet/react-hls-player', () => jest.fn());

// describe('Player', () => {
//   const mockProps = {
//     poster: 'https://example.com/poster.jpg',
//     link: 'https://example.com/video.mp4',
//     autoPlay: false,
//     controls: true,
//     muted: false,
//     duration: 10,
//   };

//   beforeEach(() => {
//     (useRef as jest.Mock).mockReturnValue({
//       current: { play: jest.fn(), pause: jest.fn() },
//     });
//   });

//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it('renders the player component with the correct props', () => {
//     render(
//       <CustomVideoPlayer
//         autoPlay={false}
//         controls={true}
//         muted={false}
//         poster="https://example.com/poster.jpg"
//         link="https://example.com/video.mp4"
//         duration={10}
//       />
//     );

//     expect(ReactHlsPlayer).toHaveBeenCalledTimes(1);
//     expect(ReactHlsPlayer).toHaveBeenCalledWith({
//       src: mockProps.link,
//       autoPlay: mockProps.autoPlay,
//       controls: mockProps.controls,
//       width: '100%',
//       height: '100%',
//       playerRef: expect.any(Object),
//       poster: mockProps.poster + '/cover.webp',
//       onMouseEnter: expect.any(Function),
//       onMouseLeave: expect.any(Function),
//       muted: mockProps.muted,
//       className: expect.any(String),
//     });
//   });

//   it('plays the video on mouse enter and pauses on mouse leave', () => {
//     render(<CustomVideoPlayer {...mockProps} />);
//     const videoElement = screen.getByRole('presentation');

//     expect(videoElement).toHaveAttribute('muted', 'false');

//     userEvent.hover(videoElement);
//     expect(videoElement).toHaveAttribute('muted', 'false');
//     expect(videoElement).toHaveAttribute('autoplay', '');
//     expect(videoElement).toHaveAttribute('controls', '');

//     userEvent.unhover(videoElement);
//     expect(videoElement).toHaveAttribute('muted', 'false');
//     expect(videoElement).toHaveAttribute('paused', '');
//   });
// });

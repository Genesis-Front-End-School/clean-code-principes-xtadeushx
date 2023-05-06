import { render } from '@testing-library/react';
import { CourseContent } from './course-content';

jest.mock('../course-list/course-list.tsx', () => ({
  CourseList: jest.fn(() => <div data-testid="course-list" />),
}));
jest.mock('../../../../components/common/video/video', () => ({
  CustomVideoPlayer: jest.fn(() => <div data-testid="custom-video-player" />),
}));

describe('CourseContent component', () => {
  const mockLessons = [
    {
      id: '278e5a0e-8df1-4646-9984-10289d52dc2d',
      title: 'Why we lack motivation',
      duration: 255,
      order: 1,
      type: 'video',
      status: 'unlocked',
      link: 'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-1/AppleHLS1/lesson-1.m3u8',
      previewImageLink:
        'https://wisey.app/assets/images/web/lessons-covers/lack-of-motivation-how-to-overcome-it/lesson-1',
      meta: {
        slug: 'lack-of-motivation-how-to-overcome-it',
        skills: [
          'Aligning your goals with your motives',
          'Overcoming decision paralysis',
          'Reframing negative self-talk',
          'Gaining clarity',
          'Challenging yourself',
        ],
        courseVideoPreview: {
          link: 'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8',
          duration: 27,
          previewImageLink:
            'https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/preview',
        },
      },
    },
    {
      id: 'd2379510-3e3a-4d87-a3e9-05c1a0195548',
      title: 'Decision paralysis',
      duration: 266,
      order: 2,
      type: 'video',
      status: 'unlocked',
      link: 'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-2/AppleHLS1/lesson-2.m3u8',
      previewImageLink:
        'https://wisey.app/assets/images/web/lessons-covers/lack-of-motivation-how-to-overcome-it/lesson-2',
      meta: {
        slug: 'lack-of-motivation-how-to-overcome-it',
        skills: [
          'Aligning your goals with your motives',
          'Overcoming decision paralysis',
          'Reframing negative self-talk',
          'Gaining clarity',
          'Challenging yourself',
        ],
        courseVideoPreview: {
          link: 'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8',
          duration: 27,
          previewImageLink:
            'https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/preview',
        },
      },
    },
  ];

  it('renders the CustomVideoPlayer component with correct props', () => {
    const { getByTestId } = render(
      <CourseContent duration={60} link="" lessons={mockLessons} />
    );
    expect(getByTestId('custom-video-player')).toBeInTheDocument();
  });

  it('renders the CourseList component with correct props', () => {
    const { getByTestId } = render(
      <CourseContent duration={60} link="" lessons={mockLessons} />
    );

    expect(getByTestId('course-list')).toBeInTheDocument();
  });
});

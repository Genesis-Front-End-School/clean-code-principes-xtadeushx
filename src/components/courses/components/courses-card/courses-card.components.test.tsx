import { render, screen } from '@testing-library/react';
import { CoursesCard } from './courses-card.components';

jest.mock('../../../../hooks/hooks.tsx', () => ({
  Link: () => <div data-testid="link"></div>,
}));

jest.mock('../../../common/video/video.tsx', () => ({
  CustomVideoPlayer: () => <div data-testid="custom-video-player"></div>,
}));

describe('coursesCard component', () => {
  it('should render the component with props', () => {
    const props = {
      id: '1',
      title: 'title 1',
      lessonsCount: 5,
      rating: 5,
      meta: {
        slug: 'string',
        skills: ['js', 'react', 'node'],
        courseVideoPreview: {
          link: 'string',
          duration: 60,
          previewImageLink: 'testLink.png',
        },
      },
      preview: 'rating-test',
    };
    render(<CoursesCard {...props} />);

    expect(screen.getByTestId('custom-video-player')).toBeInTheDocument();
    expect(screen.getByTestId('link')).toBeInTheDocument();
    expect(screen.getByText('title 1')).toBeInTheDocument();
    expect(screen.getByText('js')).toBeInTheDocument();
  });
  it('should render the component without props', () => {
    const props = {
      id: '1',
      title: 'title 1',
      lessonsCount: 5,
      rating: 5,
      meta: {
        slug: 'string',
        skills: [],
        courseVideoPreview: {
          link: 'string',
          duration: 60,
          previewImageLink: 'testLink.png',
        },
      },
      preview: 'rating-test',
    };
    render(<CoursesCard {...props} />);

    expect(screen.queryByTestId('JS')).not.toBeInTheDocument();
  });
});

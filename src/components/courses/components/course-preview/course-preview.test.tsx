import { screen, render } from '@testing-library/react';
import { CoursePreview } from './course-preview';

jest.mock('./components/preview-description/preview-description.tsx', () => ({
  PreviewDescription: jest
    .fn()
    .mockReturnValue(<div data-testid="preview-description"></div>),
}));

jest.mock('./components/preview-action/preview-action.tsx', () => ({
  PreviewAction: jest
    .fn()
    .mockReturnValue(<div data-testid="preview-actions"></div>),
}));

describe('CoursePreview component', () => {
  const props = {
    lessons: [
      {
        id: '1',
        title: 'title',
        duration: 60,
        order: 1,
        type: 'video',
        status: 'ddsdsd',
        link: 'sdsdsdsd',
        previewImageLink: 'sdsdsdsd',
        meta: {
          skills: ['skill1', 'skill2'],
        },
      },
      {
        id: '2',
        title: 'title',
        duration: 60,
        order: 1,
        type: 'video',
        status: 'ddsdsd',
        link: 'sdsdsdsd',
        previewImageLink: 'sdsdsdsd',
        meta: {
          skills: ['skill1', 'skill2'],
        },
      },
    ],
    poster: 'course',
    launchDate: '2023-05-01T00:00:00.000Z',
    courseDuration: 10,
    description: 'Test description',
    meta: {
      skills: ['skill1', 'skill2'],
    },
  };
  it('should render correctly preview components', () => {
    render(<CoursePreview {...props} />);

    expect(screen.getByTestId('preview-description')).toBeInTheDocument();
    expect(screen.getByTestId('preview-actions')).toBeInTheDocument();
  });

  it('renders poster image', () => {
    render(<CoursePreview {...props} />);

    expect(screen.getByAltText('title')).toBeInTheDocument();
  });
});

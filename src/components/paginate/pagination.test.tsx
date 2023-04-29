import React, { useState as useStateMock } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PaginatedCourses } from './pagination';

jest.mock('../../components/common/loader/loader', () => () => {});
jest.mock('../../components/courses/courses-layout', () => () => {});
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

const courses = [
  {
    id: '352be3c6-848b-4c19-9e7d-54fe68fef183',
    title: 'Lack of Motivation & How to Overcome It',
    tags: ['productivity'],
    launchDate: '2023-03-06T16:50:06.000Z',
    status: 'launched',
    description:
      'Reignite your inner drive by managing factors that dampen your motivation.',
    duration: 521,
    lessonsCount: 2,
    containsLockedLessons: true,
    previewImageLink:
      'https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it',
    rating: 3.5,
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
    id: '352be3c6-848b-4c19-9e7d-54fe68fef183',
    title: 'Lack of Motivation & How to Overcome It',
    tags: ['productivity'],
    launchDate: '2023-03-06T16:50:06.000Z',
    status: 'launched',
    description:
      'Reignite your inner drive by managing factors that dampen your motivation.',
    duration: 521,
    lessonsCount: 2,
    containsLockedLessons: true,
    previewImageLink:
      'https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it',
    rating: 3.5,
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
    id: '352be3c6-848b-4c19-9e7d-54fe68fef183',
    title: 'Lack of Motivation & How to Overcome It',
    tags: ['productivity'],
    launchDate: '2023-03-06T16:50:06.000Z',
    status: 'launched',
    description:
      'Reignite your inner drive by managing factors that dampen your motivation.',
    duration: 521,
    lessonsCount: 2,
    containsLockedLessons: true,
    previewImageLink:
      'https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it',
    rating: 3.5,
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

describe('PaginatedCourses', () => {
  const mockSetState = jest.fn();
  jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
  }));
  it('renders a spinner when loading is "pending"', () => {
    render(
      <PaginatedCourses
        itemsPerPage={3}
        courses={courses}
        loading="pending"
        error={null}
      />
    );
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders an error message when there is an error', () => {
    const error = new Error('Oops!');
    render(
      <PaginatedCourses
        itemsPerPage={3}
        courses={[]}
        loading="failed"
        error={error}
      />
    );
    expect(
      screen.getByText(`Server response with ${error.toString()}`)
    ).toBeInTheDocument();
  });

  it('renders a list of courses and pagination', () => {
    render(
      <PaginatedCourses
        itemsPerPage={3}
        courses={courses}
        loading="succeeded"
        error={null}
      />
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getAllByRole('link')).toHaveLength(3);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('updates the list of courses when a new page is selected', () => {
    render(
      <PaginatedCourses
        itemsPerPage={3}
        courses={courses}
        loading="succeeded"
        error={null}
      />
    );
    const pageLink = screen.getByText('2');
    userEvent.click(pageLink);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getAllByRole('link')[0]).toHaveTextContent('Course 4');
  });
});

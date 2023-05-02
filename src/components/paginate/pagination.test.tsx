// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { PaginatedCourses } from './pagination';

// describe('PaginatedCourses', () => {
//   const courses = [
//     {
//       id: '352be3c6-848b-4c19-9e7d-54fe68fef183',
//       title: 'Lack of Motivation & How to Overcome It',
//       tags: ['productivity'],
//       launchDate: '2023-03-06T16:50:06.000Z',
//       status: 'launched',
//       description:
//         'Reignite your inner drive by managing factors that dampen your motivation.',
//       duration: 521,
//       lessonsCount: 2,
//       containsLockedLessons: true,
//       previewImageLink:
//         'https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it',
//       rating: 3.5,
//       meta: {
//         slug: 'lack-of-motivation-how-to-overcome-it',
//         skills: [
//           'Aligning your goals with your motives',
//           'Overcoming decision paralysis',
//           'Reframing negative self-talk',
//           'Gaining clarity',
//           'Challenging yourself',
//         ],
//         courseVideoPreview: {
//           link: 'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8',
//           duration: 27,
//           previewImageLink:
//             'https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/preview',
//         },
//       },
//     },
//     {
//       id: '352be3c6-848b-4c19-9e7d-54fe68fef183',
//       title: 'Lack of Motivation & How to Overcome It',
//       tags: ['productivity'],
//       launchDate: '2023-03-06T16:50:06.000Z',
//       status: 'launched',
//       description:
//         'Reignite your inner drive by managing factors that dampen your motivation.',
//       duration: 521,
//       lessonsCount: 2,
//       containsLockedLessons: true,
//       previewImageLink:
//         'https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it',
//       rating: 3.5,
//       meta: {
//         slug: 'lack-of-motivation-how-to-overcome-it',
//         skills: [
//           'Aligning your goals with your motives',
//           'Overcoming decision paralysis',
//           'Reframing negative self-talk',
//           'Gaining clarity',
//           'Challenging yourself',
//         ],
//         courseVideoPreview: {
//           link: 'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8',
//           duration: 27,
//           previewImageLink:
//             'https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/preview',
//         },
//       },
//     },
//     {
//       id: '352be3c6-848b-4c19-9e7d-54fe68fef183',
//       title: 'Lack of Motivation & How to Overcome It',
//       tags: ['productivity'],
//       launchDate: '2023-03-06T16:50:06.000Z',
//       status: 'launched',
//       description:
//         'Reignite your inner drive by managing factors that dampen your motivation.',
//       duration: 521,
//       lessonsCount: 2,
//       containsLockedLessons: true,
//       previewImageLink:
//         'https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it',
//       rating: 3.5,
//       meta: {
//         slug: 'lack-of-motivation-how-to-overcome-it',
//         skills: [
//           'Aligning your goals with your motives',
//           'Overcoming decision paralysis',
//           'Reframing negative self-talk',
//           'Gaining clarity',
//           'Challenging yourself',
//         ],
//         courseVideoPreview: {
//           link: 'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8',
//           duration: 27,
//           previewImageLink:
//             'https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/preview',
//         },
//       },
//     },
//   ];
//   // const courses = [
//   //   { id: 1, title: 'Course 1' },
//   //   { id: 2, title: 'Course 2' },
//   //   { id: 3, title: 'Course 3' },
//   //   { id: 4, title: 'Course 4' },
//   //   { id: 5, title: 'Course 5' },
//   // ];

//   test('renders courses when loading is "idle"', () => {
//     render(
//       <PaginatedCourses
//         itemsPerPage={3}
//         courses={courses}
//         loading="idle"
//         error={null}
//       />
//     );
//     const courseTitles = screen.getAllByRole('heading', { level: 3 });
//     expect(courseTitles.length).toBe(3);
//     expect(courseTitles[0]).toHaveTextContent('Course 1');
//     expect(courseTitles[1]).toHaveTextContent('Course 2');
//     expect(courseTitles[2]).toHaveTextContent('Course 3');
//   });

//   test('renders Spinner component when loading is "pending"', () => {
//     render(
//       <PaginatedCourses
//         itemsPerPage={3}
//         courses={courses}
//         loading="pending"
//         error={null}
//       />
//     );
//     const spinner = screen.getByTestId('spinner');
//     expect(spinner).toBeInTheDocument();
//   });

//   test('renders error message when error is not null', () => {
//     const error = new Error('Server error');
//     render(
//       <PaginatedCourses
//         itemsPerPage={3}
//         courses={courses}
//         loading="idle"
//         error={error}
//       />
//     );
//     const errorMessage = screen.getByText(
//       `Server response with ${error.toString()}`
//     );
//     expect(errorMessage).toBeInTheDocument();
//   });

//   test('renders correct courses when page is changed', () => {
//     render(
//       <PaginatedCourses
//         itemsPerPage={3}
//         courses={courses}
//         loading="idle"
//         error={null}
//       />
//     );
//     const courseTitles = screen.getAllByRole('heading', { level: 3 });
//     expect(courseTitles.length).toBe(3);
//     expect(courseTitles[0]).toHaveTextContent('Course 1');
//     expect(courseTitles[1]).toHaveTextContent('Course 2');
//     expect(courseTitles[2]).toHaveTextContent('Course 3');

//     // Click on second page
//     const nextPageButton = screen.getByTitle('Next');
//     fireEvent.click(nextPageButton);

//     // Expect to see courses 4 and 5
//     const newCourseTitles = screen.getAllByRole('heading', { level: 3 });
//     expect(newCourseTitles.length).toBe(2);
//     expect(newCourseTitles[0]).toHaveTextContent('Course 4');
//     expect(newCourseTitles[1]).toHaveTextContent('Course 5');
//   });
// });

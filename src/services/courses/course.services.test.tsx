import { Course } from './course.service';

describe('Course', () => {
  let mockApiClient: any;
  let course: Course;

  beforeEach(() => {
    mockApiClient = {
      get: jest.fn(),
    };
    course = new Course(mockApiClient);
  });

  describe('getAllCourses', () => {
    it('should call apiClient.get with the correct URL', async () => {
      await course.getAllCourses();

      expect(mockApiClient.get).toHaveBeenCalledWith(
        'https://api.wisey.app/api/v1/core/preview-courses'
      );
    });

    it('should return the expected data', async () => {
      const expectedData = {
        courses: [
          {
            id: '1',
            title: 'Course 1',
            description: 'Course 1 description',
          },
          {
            id: '2',
            title: 'Course 2',
            description: 'Course 2 description',
          },
        ],
      };

      mockApiClient.get.mockResolvedValue(expectedData);

      const result = await course.getAllCourses();

      expect(result).toEqual(expectedData);
    });
  });

  describe('getCourseById', () => {
    it('should call apiClient.get with the correct URL', async () => {
      const id = '1';

      await course.getCourseById(id);

      expect(mockApiClient.get).toHaveBeenCalledWith(
        `https://api.wisey.app/api/v1/core/preview-courses/${id}`
      );
    });

    it('should return the expected data', async () => {
      const id = '1';
      const expectedData = {
        id: '1',
        title: 'Course 1',
        description: 'Course 1 description',
      };

      mockApiClient.get.mockResolvedValue(expectedData);

      const result = await course.getCourseById(id);

      expect(result).toEqual(expectedData);
    });
  });
});

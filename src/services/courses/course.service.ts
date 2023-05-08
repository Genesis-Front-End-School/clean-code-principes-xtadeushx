import { ICourse, ICourseList } from '../../common/types/coursesList.types';
import { ENV } from '../../common/enums/enums';

interface ICoursesProps {
  courses: ICourseList
}

class Course {
  public apiClient
  constructor(apiClient: any) {
    this.apiClient = apiClient;

  }

  public async getAllCourses(): Promise<ICoursesProps> {
    return this.apiClient.get(ENV.API_PATH)
  }

  public async getCourseById(id: string): Promise<ICourse> {
    return this.apiClient.get(`${ENV.API_PATH}/${id}`)
  }
}
export { Course };
import { ICourse } from 'common/types/coursesList.types';
import { ENV } from '../../common/enums/enums';

class Course {
  public apiClient
  constructor(apiClient: any) {
    this.apiClient = apiClient;

  }

  async getAllCourses() {
    return this.apiClient.get(ENV.API_PATH) as ICourse[]
  }

  async getCourseById(id: string) {
    return this.apiClient.get(`${ENV.API_PATH}/${id}`)
  }
}
export { Course };
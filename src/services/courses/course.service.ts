import { ICourse, ICourseList } from '../../common/types/coursesList.types';
import { ENV } from '../../common/enums/enums';



class Course {
  public apiClient
  constructor(apiClient: any) {
    this.apiClient = apiClient;

  }

  public async getAllCourses<T>(): Promise<T> {
    return this.apiClient.get(ENV.API_PATH)
  }

  public async getCourseById(id: string): Promise<ICourse> {
    return this.apiClient.get(`${ENV.API_PATH}/${id}`)
  }
}
export { Course };
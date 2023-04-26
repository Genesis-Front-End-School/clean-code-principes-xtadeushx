import { Storage } from './storage/storage.service';
import { Course } from './courses/course.service';
import { ApiClient } from './apiClient/apiclient.service';

const storage = new Storage({
  storage: localStorage,
});

const apiClient = new ApiClient();
const course = new Course(apiClient);
export { storage, course };

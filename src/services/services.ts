import { Storage } from './storage/storage.service';
import { Course } from './courses/course.service';
import { ApiClient } from './apiClient/apiСlient.service';

const storage = new Storage(
);

const apiClient = new ApiClient();

const course = new Course(apiClient);

export { storage, course };

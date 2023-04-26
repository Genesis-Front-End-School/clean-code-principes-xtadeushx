export interface ICourse {
  id: string;
  title: string;
  tags: string[];
  launchDate: string;
  status: string;
  description: string;
  duration: number;
  previewImageLink: string;
  rating: number;
  meta: IMeta;
  lessons: ILesson[];
  containsLockedLessons: boolean;
}

export interface IMeta {
  slug: string;
  skills: string[];
  courseVideoPreview: ICourseVideoPreview;
}

export interface ICourseVideoPreview {
  link: string;
  duration: number;
  previewImageLink: string;
}

export interface ILesson {
  id: string;
  title: string;
  duration: number;
  order: number;
  type: string;
  status: string;
  link: string;
  previewImageLink: string;
  meta: any;
}

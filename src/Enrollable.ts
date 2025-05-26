export interface Enrollable {
  enroll(course: Course): void;
}

import { Course } from "./Course";

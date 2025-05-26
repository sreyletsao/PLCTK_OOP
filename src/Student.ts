import { Person } from "./Person";
import { Enrollable } from "./Enrollable";
import { Course } from "./Course";

export class Student extends Person implements Enrollable {
  private courses: Course[] = [];

  constructor(name: string, address: string, public grade: string) {
    super(name, address);
  }

  enroll(course: Course): void {
    this.courses.push(course);
    course.addStudent(this);
  }
}

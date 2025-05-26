import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { Course } from "./Course";

export class School {
  private students: Student[] = [];
  private teachers: Teacher[] = [];
  private courses: Course[] = [];

  constructor(public name: string) {}

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }
}

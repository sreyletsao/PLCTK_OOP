import { Teacher } from "./Teacher";
import { Student } from "./Student";

export class Course {
  private students: Student[] = [];

  constructor(public name: string, public teacher: Teacher) {}

  addStudent(student: Student): void {
    this.students.push(student);
  }
}

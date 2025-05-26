import { Person } from "./Person";
import { Student } from "./Student";

export class Teacher extends Person {
  constructor(name: string, address: string, public subject: string) {
    super(name, address);
  }

  assignGrade(student: Student, grade: string): void {
    console.log(`${this.name} assigned grade ${grade} to ${student.getName()}`);
  }
}

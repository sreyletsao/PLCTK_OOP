import { Teacher } from "./Teacher";
import { Student } from "./Student";
import { Course } from "./Course";
import { School } from "./School";

const teacher = new Teacher("Mr. Sam", "123 Street", "Math");
const student = new Student("Pichie", "456 Street", "Grade 12");
const course = new Course("Mathematics", teacher);
const school = new School("Passerelles Numériques");

school.addTeacher(teacher);
school.addStudent(student);
school.addCourse(course);

student.enroll(course);
teacher.assignGrade(student, "A");

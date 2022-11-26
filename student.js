//student class
class Student {
    //constructor of Student class
    constructor(name, age, marks) {
      this.name = name;
      this.age = age;
      this.marks = marks;
    }
    isEligible(minAge) {
      return (minMarks) => {
        if (this.marks > minMarks && this.age > minAge) {
          console.log(this.name + " is eligible for placements");
        } else {
          console.log(this.name + " is not eligible for placements");
        }
      };
    }
  }
  const stu = new Student("Likhithasri", 17, 21);
  const stu1 = new Student("Shivani", 20, 55);
  const stu2 = new Student("Pavani", 16, 33);
  const stu3 = new Student("Kachu", 22, 42);
  const stu4 = new Student("Keerthi", 18, 26);
  stu.isEligible(18)(40);
  stu1.isEligible(18)(40);
  stu2.isEligible(18)(40);
  stu3.isEligible(18)(40);
  stu4.isEligible(18)(40);
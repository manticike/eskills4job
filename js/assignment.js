// const student = {
//   firstName: "Isaac",
//   lastName: "Antwi",
//   age: 45,
//   grades: [83, 69, 70, 91]
// }

// // An array for students
// let studentArray = ['Emmanuel Gyasi', 'Isaac Antwi', 'Akosua Mensah', 'Samson Yankson', 'Stephen Marfo Jr'];
// console.log(studentArray);

// Create an empty array to store multiple Student objects.
let multipleStudentArray = [];

multipleStudentArray.push({
  name: "Deborah Kyerewaah",
  age: 31,
  grades: [88, 60, 78, 57]
},

{
  name: "Michael Oberkoh",
  age: 55,
  grades: [99, 100, 87, 80]
},

{
  name: "Joseph Nyarkoh",
  age: 26,
  grades: [87, 70, 57, 73]
}
);

multipleStudentArray.forEach(student => console.log(student));
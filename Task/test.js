// import _ from "underscore";
const _ = require("underscore");

// const sample = {
//   name: "hi",
//   age: 22
// };

// const getName = (key) => {
//   console.log(sample[key]);
// };

// getName("name");

const personalDetails = [
  {
    id: 1,
    name: "John",
    age: 18,
    address: "123 Maple St, Springfield",
    phone: "123-456-7890",
    email: "john@example.com"
  },
  {
    id: 2,
    name: "Emma",
    age: 20,
    address: "456 Oak St, Riverside",
    phone: "987-654-3210",
    email: "emma@example.com"
  },
  {
    id: 3,
    name: "Sophia",
    age: 19,
    address: "789 Pine St, Greenville",
    phone: "555-678-1234",
    email: "sophia@example.com"
  }
];

const educationDetails = [
  {
    id: 1,
    grade: "A",
    major: "Computer Science",
    year: "Freshman"
  },
  {
    id: 2,
    grade: "B",
    major: "Mechanical Engineering",
    year: "Sophomore"
  },
  {
    id: 3,
    grade: "A",
    major: "Business Administration",
    year: "Freshman"
  }
];

const group = _.groupBy(educationDetails, "id");
// console.log(group);

const outputArr = [];
for (let i = 0; i < personalDetails.length; i++) {
  const oStudent = {};
  oStudent.id = personalDetails[i].id;
  oStudent.name = personalDetails[i].name;
  if (group[personalDetails[i].id]) {
    oStudent.grade = group[personalDetails[i].id][0].grade;
    oStudent.major = group[personalDetails[i].id][0].major;
  }
  if (group[personalDetails[i].id]) {
    oStudent.grade = group[personalDetails[i].id][0].grade;
    oStudent.major = group[personalDetails[i].id][0].major;
  }
  outputArr.push(oStudent);
}

// for (let i = 0; i < personalDetails.length; i++) {
//   for (let j = 0; j < educationDetails.length; j++) {
//     console.log("111111111");
//     if (personalDetails[i].id === educationDetails[j].id) {
//       const oStudent = {};
//       oStudent.id = personalDetails[i].id;
//       oStudent.name = personalDetails[i].name;
//       oStudent.grade = educationDetails[j].grade;
//       oStudent.major = educationDetails[j].major;
//       outputArr.push(oStudent);
//     }
//   }
// }
// console.log(outputArr);

/* output
[
    {
        id:1,
        name: "Emma",
        grade: "A",
        major: "Mechanical Engineering"
    }
] 
 
*/

// students.forEach((student) => {
//   console.log(student.name);
// });

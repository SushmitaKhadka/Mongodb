use("3pm");

// db.students.insertMany([
//   { name: "Bishal", grades: [85, 80, 80] },
//   { name: "Milan", grades: [88, 90, 92] },
//   { name: "Ayush", grades: [85, 100, 90] },
// ]);

// db.students.updateOne({
//     name:"Bishal",
//     grades:85
// },{
//     $set:{
//         "grades.$":95
//     }
// })

// db.students.updateOne({
//     name:"Milan"
// },{
//   $inc:{
//     "grades.$[]":-8
//   }
// })

//? more update on aray

//? push values on array => $push ,$addToSet
//? add  item to the last element of an array

// db.students.updateOne({
//     name:"Bishal"
// },{
//     $push:{
//         grades:95
//     }
// })

//? add 91  to milan grades

// db.students.updateOne({
//     name:"Milan"
// },{$push:{
//     grades:91
// }})

//? adding multiple value to push

// db.students.updateOne(
//     {
//         name :"Milan"
//     },{
//         $push:{grades:[70,81]}
//     }
// )
//***  it adds whole aarray at the last index of grades

// db.students.updateOne({
//     name:"Milan"
// },{
//     $push:{

//         grades:{$each:[78,81]}
//     }
// })

//? adding multiple marks in "Ayush"

db.students.updateOne(
  {
    name: "Ayush",
  },
  {
    $push: {
      grades: { $each: [55, 61, 92, 85, 70] },
    },
  }
);

db.students.find();

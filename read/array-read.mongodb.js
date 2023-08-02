use("3pm");
//*Array use operations

// db.friends.insertMany([
//   {
//     name: "Rohan",
//     hobbies: ["Singing", "Books"],
//     sportData: [
//       {
//         title: "Football",
//         frequency: 3,
//       },
//       {
//         title: "Cricket",
//         frequency: 2,
//       },
//     ],
//   },
//   {
//     name: "Dipesh",
//     hobbies: ["Books", "Guitar", "Hiking"],
//     sportData: [
//       {
//         title: "Football",
//         frequency: 5,
//       },
//       {
//         title: "Tennis",
//         frequency: 1,
//       },
//       {
//         title: "Volleyball",
//         frequency: 6,
//       },
//     ],
//   },
//   {
//     name: "Aakash",
//     hobbies: ["Hiking", "Foods", "Singing"],
//     sportData: [
//       {
//         title: "E-gaming",
//         frequency: 3,
//       },
//       {
//         title: "Football",
//         frequency: 2,
//       },
//       {
//         title: "Basketball",
//         frequency: 7,
//       },
//     ],
//   },
// ]);

//? find friends whpse hobbies is singing

// db.friends.find({hobbies:"Singing"})

// db.friends.find({hobbies:{$in:["Books","Foods"]}})

// db.friends.find({
//     hobbies:["Singing","Books"]
// })

//? $all ==> and ko shortcut

// db.friends.find({
//     hobbies:{$all:["Books","Singing"]}
// })

// db.friends.find({

//  hobbies:{$all:["Hiking","Guitar"]}
// })

// db.friends.find({
//     hobbies:{$in:["Guitar","Foods"]}
// })

// db.friends.find({

//     $or:[{hobbies:"Guitar"},{hobbies:"Foods"}]
// })

//?size

// db.friends.find({
//     hobbies:{$size:3}
// })

//? $eleMatch
//?condition shoould match on same element of an array

// db.friends.find({
//     sportData:{title:"Football",frequency:3}
// })

//? kind of array ..any elemnet in array
// db.friends.find({
//     "sportData.title":"Football",
//     "sportData.frequency" :3
// })

//?eleMatch => con. should match on same element

// db.friends.find({
//     sportData:{
//         $eleMatch:{
//             title:"Football",
//             frequency:{gt:2}
//         }
//     }
// })

// db.friends.find({
//     sportData:{

//     $elemMatch:{
//         title:"Cricket",
//         frequency:{lt:3}
//     }
// }
// })

//?project

// db.friends.find()

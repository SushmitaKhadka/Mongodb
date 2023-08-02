use("3pm");

// db.scores.insertMany([
//   {
//     name: "Sanjeev",
//     age: 23,

//     highestScore: 93,
//     location: {
//       temporary: "Ktm",
//       permanent: "Kavre",
//     },
//     scores: [
//       {
//         subject: "Science",
//         obtained: 85,
//       },
//       {
//         subject: "Social",
//         obtained: 75,
//       },
//       {
//         subject: "Math",
//         obtained: 93,
//       },
//     ],
//   },
//   {
//     name: "Anit",
//     age: 24,

//     highestScore: 95,
//     location: {
//       temporary: "Ktm",
//       permanent: "Nepalgunj",
//     },
//     scores: [
//       {
//         subject: "Science",
//         obtained: 95,
//       },
//       {
//         subject: "Social",
//         obtained: 82,
//       },
//       {
//         subject: "Math",
//         obtained: 73,
//       },
//     ],
//   },
//   {
//     name: "Dipesh",
//     age: 23,

//     highestScore: 98,
//     location: {
//       temporary: "Ktm",
//       permanent: "Bhaktapur",
//     },
//     scores: [
//       {
//         subject: "Science",
//         obtained: 81,
//       },
//       {
//         subject: "Social",
//         obtained: 67,
//       },
//       {
//         subject: "Math",
//         obtained: 98,
//       },
//     ],
//   },
// ])

// db.scores.updateOne({
//     name:"Dipesh"
// },{

//     $pull:{
//         scores:{obtained:{$lt:67}}
//     }
// })

//?remove Data Science subject  from Anit score

// db.scores.updateOne({
//     name:"Anit"
// },{
//     $pull:{
//         scores:{subject:"DataScience"}
//     }
// })

// db.scores.updateOne(
//   {
//     name: "Anit"
//   },
//   {
//     $pullAll: {
//       scores: [{
//     subject: "Math",
//     obtained:73
// },
//       ]
//     }

//   }
// );

// db.scores.updateOne(
//   {
//     name: "Anit",
//   },
//   {
//     $push: {
//       scores: {
//         $each: [
//           {
//             subject: "Computer",
//             obtained: 85,
//           },
//           {
//             subject: "Data Mining",
//             obtained: 85,
//           },
//         ],
//       },
//     },
//   }
// );

// db.scores.find();

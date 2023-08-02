use("3pm");

//deleteOne

// db.persons.deleteOne({"name.first":"victor"})

// db.persons.deleteMany({ "name.first": "victor" });

//?delete user whose name is maeva wilson

//  db.persons.deleteOne({ _id: ObjectId("64c62e627250fd232e009bca") });

// db.persons.deleteOne({"name.first":"maeva","name.last":"wilson"})

//?find persons whose gender is male

// db.persons.find({gender:"male"})

//? aggregations =>complex query
//?only read operation
//? consist of pipeline stage
//? examples includes $match,$lookup,$group,$skip,$limit,$project

// db.persons.aggregate([
//   {
//     $match: { gender: "female" },
//   },
//     {
//         $project: {
//         gender: 1,
//         email: 1,
//         fullName: { $concat: ["$name.first", " ", "$name.last"] },
//         dob: 1,

//         currentAge:"$dob.age"

//         },
//     },
//     {
//         $sort: {
// currentAge: -1,
// "email":1
//         },
//     },

//         {

//             $skip:3,
//         },
//         {

//             $limit:3
//         }
// ]);

//* find users are male and

//     db.persons.aggregate([{

// $match:{gender:"male","dob.age":{$gt:30}}
//         $match:{
//             $and:[{gender:"male"},{"dob.age":{$gt:30}}]
//         }
//     },
//     {

//         $project:{
//             name:1,
//             gender:1,
//             age:"$dob.age",
//             email:1,
//             state:"$location.state",
//             phone:1
//         }
//     },
//   {

//          $sort:{
//              age:1
//         }
//      },{

//         $skip:20
//      },{

//         $limit:4
//      }
// ])

db.persons.find();

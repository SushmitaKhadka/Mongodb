use("netflix");

//? find movies whose name is :Under the dome
// db.shows.findOne({
//     name:"Under the Dome"
// },{
//     name:1,
//     status:1,
//     runtime:1,
//     rating:1,

// })

// db.shows.find()

// db.shows.find({
//     name:"Under the dome"
// },{
//     name:1,
//     genre:1,
//     status:1
// })

// db.shows.find({

// },{
//     name:1,
//     rating:1
// })

//?limit

// db.shows.find({},{name:1}).skip(3).limit(3)

//? find movies whose average rating is greater than 7

// db.shows.find({"rating.average":{$gt:7}},{name:1,rating:1}).sort({
//  "rating.average":-1
// })

//? find show whose runtime is less than 100 and sort the result by name in decending order
//? project name,runtime & status

// db.shows.find({ runtime: { $lt: 100 } },
//     {
//         name:1,
//         runtime:1,
//         status:1

//     }).sort({
//   name: -1,
// });

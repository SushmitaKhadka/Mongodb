// use("netflix");

// db.shows.find()

//? $regex

// db.shows.find({
//   summary: {
//     $regex: "Dome",
//     $options: "i",
//   }
// });

// db.sales.insertMany([
//   {
//     name: "laptop",
//     volume: 20,
//     order: 25,
//   },
//   {
//     name: "Key board",
//     volume: 25,
//     order: 15,
//   },
//   {
//     name: "Mobile",
//     volume: 50,
//     order: 60,
//   },
// ]);

// db.sales.find();

//? $expr

//order > volume

// db.sales.find({ $expr: { $gt: ["$volume", "$order"] } });

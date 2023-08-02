use("3pm");

// ?1.update lowestScore of Dipesh to 51,
// ?temporary location to "Biratnagar"
// ?Change name of Santosh to Sandip
// ?2.increase age of Dipesh by 2
// ?3.decrease lowestScore of Dipesh by 9
// ?4. divide age of Anit by 2
// ?5.multiply age of Sanjeev by 1.5

// db.scores.updateOne({
//     name:"Dipesh"
// },{
//     $set:{
//         lowestScore:51,
//         "location.temporary":"Biratnagar"
//     }
// })

// db.scores.updateOne({name:"Dipesh"},{
//  $inc:{
//     age:2,
//     lowestScore:-9
//  }
// })

// db.scores.updateOne({
//     name:"Anit"
// },{
//     $mul:{
//         age:0.5
//     }
// })

//?==========Update Array

//? $ (operator) =>

// db.scores.updateOne({
//     name:"Sanjeev",
//     "scores.subject":"Science"
// },{
//     $set:{
//         "scores.$.subject":"Commerce"
//     }
// })

//? change Social to DataScience of Anit

// db.scores.updateOne({
//     name:"Anit",
//     "scores.subject":"Social"
// },{
//     $set:{
//         "scores.$.subject":"DataScience"
//     }
// })

//increase Dipesh social marks by 15

// db.scores.updateOne({
//     name:"Dipesh",
//     "scores.subject":"Social"
// },{

//     $inc:{
//         "scores.$.subject":15
//     }
// })

// db.scores.updateOne({
//     name:"Santosh"
// },{
//     $set:{
//         "scores.$[].obtained":79
//     }
// })

// db.scores.updateOne({
//     name:"Santosh"},{

//         $inc:{
//             "scores.$[].obtained": -5
//         }
//     })

// db.scores.updateOne({
//     name:"Dipesh"
// },{
//     $set:{
//         "scores.$[element].obtained":70
//     }
// },{
//     arrayFilters:[{"element.obtained":{$gt:80}}]
// })

// db.scores.find()

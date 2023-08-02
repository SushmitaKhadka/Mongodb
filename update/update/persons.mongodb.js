//update

use("3pm");

//?set

// db.persons.find()

//find user with firstName "victor" and set  his email  to "victoer@gmail.com"

// db.persons.updateOne({
//     "name.first":"victor"
// },
// {
//     $set:{
//         email:"vic@gmail.com"
//     }

// })

//* find user whpse first name is carl and state is "wicklow"
//*update his email to "carl@gmail.com"
//* and phone  is 984544444

// db.persons.updateOne({

//     "name.first":"carl",
//     "location.state":"wicklow"
// },{
//     $set:{
//         email:"carl@gmail.com",
//         phone:984544444
//     }
// })

db.persons.findOne({
  "name.first": "carl",
  "location.state": "wicklow",
});

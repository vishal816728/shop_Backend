// data for database

// [
//     {
//       "key": 1,
//       "images": []
//     },
//     {
//       "key": 2,
//       "images": [
//         {
//           "name": "sunita williams",
//           "age": 30
//         },
//         {
//           "name": "sapna chawla",
//           "age": 60
//         },
//         {
//           "name": "Edwin eldrin",
//           "age": 83
//         },
//         {
//           "weight": 90,
//           "age": 89
//         }
//       ]
//     }
//   ]

// query for deleting a paticular field inside an array

// db.collection.update({
//     "images.name": "sunita williams"
//   },
//   {
//     $unset: {
//       "images.$.age": ""
//     }
//   })


// now this query will delete the age of sunita williams 


// 03[%!03!~|3[%@221011!~|221018!~|10147!~|14!~|0!~|GB!~|GB!~|en!~|GBP!~|0!~|9327!~|10147!~|14!~|1!~|0!~|05081033!~|!~|1263.1[%@0[%@false[%@CHF[%@[%@0[%@!~|1#11964!~|GLE[%!GLE!~|30[%@30!~|!~|Double Queen Economy!~|1!~|!~|rateCode[%@1#PIT#23403|!~|OK!~|Sith

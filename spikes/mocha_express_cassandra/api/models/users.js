// user model
'use strict'
// Config
const dbClient = require('./connection');
const resp = require('./responseJson');
const formatResponse = require('./formatResponse');
// get a user
function getUser(id) {
  return new Promise (
    function (resolve, reject) {

      const query = `
        SELECT * from Users
        WHERE id = ?
        `;

        dbClient.execute(query,[id], { prepare: true },function (err,result) {
          if (!err) {
             resolve(formatResponse.found(result));
          } else {
            reject(formatResponse.error(err));
          }
        });
  })
}

function addUser(user) {
  return new Promise (
    function (resolve, reject) {
      if (user === 'dave') {
        resolve('Dave Added')
      } else {
        reject('user not added')
      }
    }
  )

}


module.exports={getUser,
                addUser};

// exports=addUser;
// module.exorts=addUser;
// module.exports=deleteUser;

// create a user

// Update a user

// Delete a User

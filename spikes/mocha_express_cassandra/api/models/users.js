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
      console.log('user', user);
      const query = `
        INSERT INTO Users JSON ?` ;
      dbClient.execute(query,[JSON.stringify(user)], function (err,result) {
        if (!err) {
           console.log('Ok');
           resolve(formatResponse.found(result));
        } else {
          console.log('error', err);
         reject(formatResponse.error(err));
        }

      });
  })
}


module.exports={ getUser,
                 addUser };

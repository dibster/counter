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
      const query = `
        INSERT INTO Users JSON ?` ;
      dbClient.execute(query,[JSON.stringify(user)], function (err,result) {
        if (!err) {
           resolve(formatResponse.insertResponse(result));
        } else {
         reject(formatResponse.error(err));
        }

      });
  })
}

// delete a user
function deleteUser(id) {
  console.log(typeof parseInt(id));
  return new Promise (
    function (resolve, reject) {

      const query = `
        DELETE from Users
        WHERE id = ?
        `;

        dbClient.execute(query,[parseInt(id)],{ prepare : true },function (err,result) {
          if (!err) {
             resolve(formatResponse.deleteResponse(result));
          } else {
            reject(formatResponse.error(err));
          }
        });
  })
}



module.exports={ getUser,
                 addUser,
                 deleteUser };

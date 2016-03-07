// format responses from Cassandra

'use strict';

const response = {}
response.responseCode = 200;
response.messages = [];
response.length = 0;
response.rows = [];
response.record = {};

function found(result) {
  console.log('result ', JSON.stringify(result.rowLength));
  // if resul Length = 0 , not found
  let newResponse = response;
  newResponse.responseCode = 200;
  newResponse.messages = [];
  newResponse.length = result.rowLength;

  if (newResponse.length == 0) {
    newResponse.responseCode = 404;
    newResponse.messages.push('Not Found');
    newResponse.rows = [];
    newResponse.record = {};
  } else if (newResponse.length === 1) {
    newResponse.record = result.rows[0];
  } else {
    newResponse.rows = result.rows;
  }

  return newResponse;
}

function error(err) {
  let errResponse = response;
  errResponse.responseCode = 400;
  errResponse.messages.push(err.message);

  return errResponse
}

module.exports={found,
                error};

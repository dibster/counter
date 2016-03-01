// format responses from Cassandra

'use strict';

const response = {}
response.responseCode = 200;
response.messages = [];
response.length = 0;
response.rows = [];
response.record = {};

function found(result) {
  console.log('result', result);
  let newResponse = response;
  newResponse.responseCode = 200;
  newResponse.messages = [];
  newResponse.length = result.rows.length;

  if (newResponse.length === 1) {
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

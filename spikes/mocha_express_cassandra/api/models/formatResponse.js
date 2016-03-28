// format responses from Cassandra

'use strict';

const REST_RESPONSE_CODES = {
  OK : 200,
  NOT_FOUND : 404,
  SERVER_ERROR : 500
}

const restResponse = {
  status : REST_RESPONSE_CODES.OK,
  messages : [],
  length : 0,
  rows : [],
  record : {}
}

// to clone the standard message
function cloneObj(from) {
  return JSON.parse(JSON.stringify(from));
}

function insertResponse(resp) {
  // set Insert status codes to 200
  let newResponse = cloneObj(restResponse);
  return newResponse;
}

function deleteResponse(resp) {
  console.log('delete resp', resp);
  let newResponse = cloneObj(restResponse);
  return newResponse;

}

function found(result) {
  // if result Length = 0 , not found
  let newResponse = cloneObj(restResponse);
  newResponse.status = REST_RESPONSE_CODES.OK
  newResponse.messages = [];
  if (typeof result.rowLength === 'undefined') {
    newResponse.length = 0
  } else {
    newResponse.length = result.rowLength;
  }
  if (newResponse.length === 0) {
    newResponse.status = REST_RESPONSE_CODES.NOT_FOUND;
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
  let errResponse = cloneObj(restResponse);
  errResponse.status = REST_RESPONSE_CODES.SERVER_ERROR;
  errResponse.messages.push(err.message);

  return errResponse
}

module.exports={found, insertResponse, deleteResponse, error};

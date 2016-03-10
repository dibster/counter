// format responses from Cassandra

'use strict';

const REST_RESPONSE_CODES = {
  OK : 200,
  NOT_FOUND : 404,
  SERVER_ERROR : 500
}

const response = {}
response.status = REST_RESPONSE_CODES.OK;
response.messages = [];
response.length = 0;
response.rows = [];
response.record = {};

function found(result) {
  // if resul Length = 0 , not found
  let newResponse = response;
  newResponse.status = REST_RESPONSE_CODES.OK
  newResponse.messages = [];
  newResponse.length = result.rowLength;

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
  let errResponse = response;
  errResponse.status = REST_RESPONSE_CODES.SERVER_ERROR;
  errResponse.messages.push(err.message);

  return errResponse
}

module.exports={found,
                error};

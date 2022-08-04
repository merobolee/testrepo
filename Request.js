const request = require('request');
 
_EXTERNAL_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;
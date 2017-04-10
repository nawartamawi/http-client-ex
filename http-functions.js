var https = require("https");
function getHTML (options, callback) {
  https.get(options, (response) => {
    response.setEncoding("utf8");
    let responseString = "";
    response.on('data', (data) => {
        responseString += data; 
        callback(responseString);
    });
  });
}
module.exports = getHTML;
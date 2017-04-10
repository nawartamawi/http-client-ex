var https = require("https");
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

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
function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
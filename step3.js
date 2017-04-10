var https = require("https");
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

function getAndPrintHTML (options) {
  https.get(options, (response) => {
    response.setEncoding("utf8");
    let responseString = "";
    response.on('data', (data) => {
        responseString += data; 
        console.log(responseString);
    });
  });
}
getAndPrintHTML(requestOptions);
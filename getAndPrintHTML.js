var https = require("https");
function getAndPrintHTML () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  https.get(requestOptions,(response) => {
      response.setEncoding("utf8");
      let responseString = "";
      response.on('data', (data) => {
          responseString += data; 
          console.log(responseString);
      });
  });
}
getAndPrintHTML();
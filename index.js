var http = require('http');


app.listen(port, function(err) {
    if (err) {
      console.log(err);
    } else {
      open(`http://localhost:${port}`);
    }
  });
  
var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
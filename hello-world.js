const http = require("http");
const fs=require("fs");
const password=require("./password-generator");
const email=require("./email-sender");
const requestListener = function (req, res) {
    fs.readFile('./welcome.txt','utf8',function(err,data){
  res.writeHead(200,{'Content-Type': 'text'});
  res.write(data)
  return res.end();
})} 
password()
email()


const PORT = 3000;
const server = http.createServer(requestListener);
server.listen(PORT, (error) =>
  error ? console.log(error) : console.log(`server is runing on port ${PORT}`)
);


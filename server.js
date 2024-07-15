//creating an http server
const http = require("http");
const getReq = require("./methods/get-request");
const postReq = require("./methods/post-request");
const putReq = require("./methods/put-request");
const deleteReq = require("./methods/delete-request");
let movies = require("./data/movies.json");
require("dotenv").config();
//creating a port toh have my server to listen
//application will use the specified port (process.env.PORT) if it's defined in the environment variables.
//If not, it defaults to 5001.
const PORT = process.env.PORT || 5001
//process.env.PORT: This refers to an environment variable named PORT
//creating a server with request and response as parameters
const server = http.createServer((req,res)=> {
    req.movies = movies;
    switch(req.method){
        case "GET":
            getReq(req,res);
            break;
        case "POST":
            postReq(req,res);
            break;
        case "PUT":
            putReq(req,res);
            break;
        case "DELETE":
            deleteReq(req,res);
            break;
        default:
            res.statusCode = 404;
            res.setHeader("Content-Type","application/json");
            res.write(JSON.stringify({title : "not found", message: "route not found"}));
            res.end();
    }
});
//listen to server on a port
server.listen(PORT,() => {
    console.log(`server started on the port : ${PORT} `);
})
const { log } = require("console");
const http = require("http");
const mongoDB = require("mongodb");


let db;
const connectionString = "mongodb+srv://turobsulaymonov117:FxixQQF3ySkHAVX8@cluster.3bdrsjj.mongodb.net/Reja?retryWrites=true&w=majority";

mongoDB.connect(
    connectionString, 
    {
    useNewUrlParser: true,
    useUnifieldTopolgy: true,

}, (err, client) => {
    if(err) console.log("Error on connection MongoDB");
    else{ console.log("MongoDB connection succeed");
           module.exports = client;
          
          
          const app = require("./app");
          const server = http.createServer(app);
          let PORT =  7003;
          server.listen(PORT, function () {
            console.log(`The server is running successfelly on port: ${PORT}, http://localhost:${PORT}`);
        });
        

}
});


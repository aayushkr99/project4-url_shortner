const express = require('express');
const redis = require("redis")
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

const redisClient = redis.createClient(
    19720,
    "redis-19720.c301.ap-south-1-1.ec2.cloud.redislabs.com",
    { no_ready_check: true }
  );
  redisClient.auth("13Lx8pEAxBUpdWF00PrlOAX1gvoiNCXi", function (err) {
    if (err) throw err;
  });
  
  redisClient.on("connect", async function () {
    console.log("Connected to Redis..");
  });
  module.exports = {app, redisClient}
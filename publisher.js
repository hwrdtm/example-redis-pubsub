var redis = require("redis");
var pub = redis.createClient();

setInterval(() => {
  console.log("sending message...");
  pub.publish(
    "a nice channel",
    "I am sending a message at " + new Date().getTime()
  );
}, 2000);

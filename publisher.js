var redis = require("redis");
var pub = redis.createClient();

var counter = 0;

setInterval(() => {
  console.log("sending message...");
  pub.publish(
    "a nice channel",
    `${counter}. I am sending a message at ${new Date().getTime()}`
  );
  counter++;
}, 2000);

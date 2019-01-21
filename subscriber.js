var redis = require("redis");
var sub = redis.createClient();
var msg_count = 0;

sub.on("message", function(channel, message) {
  console.log("sub channel " + channel + ": " + message);
  msg_count += 1;
  if (msg_count === 3) {
    sub.unsubscribe();
    sub.quit();
  }
});

sub.subscribe("a nice channel");

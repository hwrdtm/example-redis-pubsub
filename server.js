const express = require("express");
const redis = require("redis");
const app = express();
const port = 3000;

app.get("/stream", async (req, res) => {
  res.status(200).set({
    connection: "keep-alive",
    "cache-control": "no-cache",
    "content-Type": "text/event-stream"
  });

  const subscriber = redis.createClient();
  res.socket.on("close", function() {
    console.log("a client disconnected");
    subscriber.unsubscribe();
    subscriber.quit();
    res.end();
  });

  subscriber.on("message", function(channel, message) {
    console.log(`${new Date().getTime()}: sending message...`);
    res.write(`[${channel}]: ${message}\n\n`);
  });
  subscriber.subscribe("a nice channel");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

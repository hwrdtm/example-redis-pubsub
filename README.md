## Getting started

Run the following to start the server:

```
node ./server.js
```

Then, run the following to start the publisher, which regularly publishes a message to the channel every 2 seconds:

```
node ./publisher.js
```

You can now navigate to http://localhost:3000/stream to see the messages coming through from Redis Pub/Sub.

---

To run the subscriber, run the following:

```
node ./subscriber.js
```

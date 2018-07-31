"use strict";

// Import server
const server = require("./server.js");

// Set port as either specified by command line or 9000
server.set("port", (process.env.PORT || 9000));

// Start server
server.listen(server.get("port"), () => {
    console.log(`Server started: http://localhost:${server.get("port")}/`);
});

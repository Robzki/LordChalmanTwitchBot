var tmi = require('tmi.js');

var options = {
    options: {
      debug: true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: "VadNuBottenHeter",
    password: "VadFörLösenordBottenHar"
  },
  channels: ["kompisrobzki",
             "KompisKlanen"]
};

var client = new tmi.client(options);
client.connect();

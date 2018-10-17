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
    username: "LordChalmanBot",
    password: "oauth:47sr0qcwrlbnx2mdnoj5xym01wjnz5"
  },
  channels: ["kompisrobzki",
             "kompisklanen",
             "goldenarrowse"]
};

var client = new tmi.client(options);
client.connect();

client.on('connected', function(adress, port) {
  client.action("kompisrobzki", "Lord Chalman har anlänt!");
});

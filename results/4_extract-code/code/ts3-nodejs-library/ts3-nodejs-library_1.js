const TeamSpeak3 = require("ts3-nodejs-library")

//Create a new Connection
const ts3 = new TeamSpeak3({
  host: "localhost",
  queryport: 10011,
  serverport: 9987,
  username: "serveradmin",
  password: "",
  nickname: "NodeJS Query Framework"
})

/*
  Ready gets fired when the Bot has connected to the TeamSpeak Query and
  issued login commands (if username and password has been given)
  selected the appropriate Server (also if given in the config)
  and set the nickname
*/
ts3.on("ready", async () => {
  try {
    //Retrieves a List of non Query Clients
    const clients = await ts3.clientList({client_type: 0})
    clients.forEach(client => {
      console.log("Sending Message to", client.nickname)
      //Sends to every Client a "Hello"
      client.message("Hello!")
    })
  } catch (e) {
    console.log("Catched an error!")
    console.error(e)
  }
})

ts3.on("error", e => console.log("Error", e.message))
ts3.on("close", e => console.log("Connection has been closed!", e))

import * as Colyseus from "colyseus.js";

/*================================================
| Array with current online players
*/
let onlinePlayers = [];

/*================================================
| Colyseus connection with server
*/
var client = new Colyseus.Client('wss://gotchi-moon.herokuapp.com/');
let room = client.joinOrCreate("poke_world").then(room => {
    console.log(room.sessionId, "joined", room.name);
    return room
}).catch(e => {
    console.log("JOIN ERROR", e);
});

export {onlinePlayers, room};

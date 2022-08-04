const { io } = require("socket.io-client");
const socket = io(); 



// export const authenticated = ()=>{
//     socket.connect('/user')
// }

export default socket


import socket from "js/connect/socket-connect/socket-connect";

export const socketAction = (bodyRequest) =>(
    socketRequest(socket,bodyRequest).then(result=>(result))
);

const socketRequest =(socket,bodyRequest) =>(
    new Promise(resolve => {
        socket.on(bodyRequest, (res) =>{resolve(res)});
    })
);
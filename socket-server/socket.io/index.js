const Server = require('socket.io');
const socketioJwt = require('socketio-jwt');
const redisAdapter = require('socket.io-redis');
const config = require('../config');
const redis = require('../redis/db');
const models = require('../redis/models');

// utilities
function removeFromRoom (socket, room) {
	socket.leave(room);
	redis.removeUserFromRoom(socket.request.user.id, room);
	socket.broadcast.to(room).emit('RemoveUser', socket.request.user);
};

function removeAllRooms(socket) {
    const current = socket.rooms;
	for(let r in current)
	{
		if (current[r] !== socket.id)
		{
			removeFromRoom(socket, current[r]);
		}
	}
}


async function getChats(room) {
    const charts = await redis.getChat(room);

    const result = [];
    for(let item in charts){
        try{
            result.push(JSON.parse(c));
        }catch(e){
            // log.error(e.message);
        }
    }
    
    return result;
}

async function getRooms() {
    const rooms = await redis.getRooms();

    const result = [];
    for(let item in rooms){
        result.push(models.room(item));
    }

    return result;
}


// event
const socketConnection = socket => {

    const { sub, user: { name, type } } = socket.decoded_token;
    console.log(sub, name, type);

    const user = models.User(sub, name, type);

    // add current user to redis
    redis.addUser(sub, name, type);


    socket.request.user = user;

    // socket.emit('message', socket.request.user);

    // TODO...
    socket.on('GetMe', () => socket.emit('GetMe', user) );
	socket.on('GetUser', async room => {
        const users = await redis.getUsersInRoom(room);
        socket.emit('GetUser', users);
    });

	socket.on('GetChat', data => socket.emit('GetChat', getChats(data.room)) );

	socket.on('AddChat', chat => { 
        const newChat = models.Chat(chat.message, chat.room, user);
        redis.addChat(newChat);

        socket.broadcast.to(chat.room).emit('AddChat', newChat);
		socket.emit('AddChat', newChat);
     });

	socket.on('GetRoom', () => socket.emit('GetRoom', getRooms()) );

	socket.on('AddRoom', r => {
		var room = r.name;
		removeAllRooms(socket);

        if (room !== '')
        {
            socket.join(room);
            redis.addRoom(room);
            socket.broadcast.emit('AddRoom', models.Room(room));
            socket.broadcast.to(room).emit('AddUser', user);
            redis.addUserToRoom(user.id, room);
        }
	});

	socket.on('disconnect', () => removeAllRooms(socket) );
};

exports.start = server => {
    const io = Server.listen(server);

    // db setup
    io.adapter(redisAdapter({
        host: config.redis.host, 
        port: config.redis.port
    }));

    const chat = io.of('/chat');
    // middleware
    chat.use(socketioJwt.authorize({
        secret: config.secret,
        handshake: true
    }));


    // event
    chat.on('connection', socketConnection);

    return io;
};

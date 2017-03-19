/**
 * Keys description:
 * 
 * rooms: a sorted set of all the room names created so far
 * rooms:RoomName:chats: a sorted set of all the chats sent in this room
 * rooms:RoomName: a sorted set of all the users in this room
 * users: a sorted set of all the user IDs that have logged in
 * user:UserID: a hash of the user’s name and type
 * user:UserID:room: a simple string that holds the current room this user is in
 */


const client = require('./index').redisClient;
const models = require('./models');

exports.addUser = (userId, name, type) => {
  client.multi()
  .hset('user:' + userId, 'name', name)
  .hset('user:' + userId, 'type', type)
  .zadd('users', Date.now(), userId)
  .exec();
};

exports.addRoom = room => {
  if (room !== '') client.zadd('rooms', Date.now(), room);
};

exports.getRooms = async () => {
  const data = await client.zrevrangebyscoreAsync('rooms', '+inf', '-inf');
  return data ;
};

exports.addChat = chat => {
  client.multi()
  .zadd('rooms:' + chat.room + ':chats', Date.now(), JSON.stringify(chat))
  .zadd('users', Date.now(), chat.user.id)
  .zadd('rooms', Date.now(), chat.room)
  .exec();
};

exports.getChat = async room => {
  const chats = await client.zrangeAsync('rooms:' + room + ':chats', 0, -1);
  return chats;
};

exports.addUserToRoom = (userId, room) => {
  client.multi()
  .zadd('rooms:' + room, Date.now(), userId)
  .zadd('users', Date.now(), userId)
  .zadd('rooms', Date.now(), room)
  .set('user:' + userId + ':room', room)
  .exec();
}

exports.removeUserFromRoom = (userId, room) => {
  client.multi()
  .zrem('rooms:' + room, userId)
  .del('user:' + userId + ':room')
  .exec();
};

exports.getUsersInRoom = async room => {
    const data = await client.zrangeAsync('rooms:' + room, 0, -1);
    var users = [];
    for(let item of data){
        const userHash = await client.hgetallAsync('user:' + item);
        users.push(models.User(item, userHash.name, userHash.type));
    }
    
    return users;
};

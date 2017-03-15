import io from 'socket.io-client';
import Singleton from '../utilities/Singleton';
import * as actions from '../actions/chatActions';

class ChatSocket extends Singleton {
    constructor(dispatch) {
        super();
        
        const self = this;

        self.dispatch = dispatch;

        if(!self.connected) {
            self.socket = io('http://localhost:3010/chat',{
                query: `token=${localStorage.getItem('token')}`
            });

            self.socket.on('connect', function(){
                self.connected = true;

                self.listenEvent();

                self.getMe();
            });
        }
    }

    listenEvent() {
        this.socket.on('GetMe', user => {
            this.dispatch(actions.GetMe(user));
        });

        this.socket.on('GetUser', users => {
            this.dispatch(actions.GetUsersInRoom(users));
        });

        this.socket.on('GetRoom', rooms => {
            this.dispatch(actions.GetRooms(rooms));
        });

        this.socket.on('GetChat', chats => {
            this.dispatch(actions.GetChatsInRoom(chats));
        });

        this.socket.on('AddRoom', room => {

            this.dispatch(actions.AddRoom(room));
        })
    }

    getMe() {
        this.socket.emit('GetMe');
    }

    getUsersInRoom(room) {
        this.socket.emit('GetUser', room);
    }

    getRooms() {
        this.socket.emit('GetRoom');
    }

    getChatsInRoom(room) {
        this.socket.emit('GetChat', room);
    }

    addRoom(room) {
        this.socket.emit('AddRoom', room);
    }
}


export default ChatSocket;
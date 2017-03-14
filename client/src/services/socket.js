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

        this.socket.on('GetRoom', rooms => {
            this.dispatch(actions.GetRooms(rooms));
        })
    }

    getMe() {
        this.socket.emit('GetMe');
    }

    getRooms() {
        this.socket.emit('GetRoom');
    }
}


export default ChatSocket;
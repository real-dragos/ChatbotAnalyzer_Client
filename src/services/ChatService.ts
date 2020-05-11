import io from 'socket.io-client';
import store from '../redux/store';
import { addMessage } from '../redux/chat/chatActions';
import { IMessage } from '../model/IMessage';

class ChatService {
    private static socket: any;

    public static connect(url:string){
        ChatService.socket = io.connect(url);
        ChatService.socket.on('message', this.receiveMessageHandler);
    }

    public static receiveMessageHandler(response: any){
        console.log("Received Message: ", response)
        const message: IMessage = {
            id: '-1',
            text: response,
            ownerId: "other",
            timestamp: new Date()
        }
        store.dispatch(addMessage(message));
    }

    public static sendMessage(messageData: any){
        store.dispatch(addMessage(messageData.message))
        if(ChatService.socket){
            ChatService.socket.emit('message', messageData);
        }
    }
}

export default ChatService;
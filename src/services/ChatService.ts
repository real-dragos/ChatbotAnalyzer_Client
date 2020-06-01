import io from 'socket.io-client';
import store from '../redux/store';
import { addMessage, setMetadata, addHistoryItem } from '../redux/chat/chatActions';
import { IMessage } from '../model/IMessage';
import { IChatMetadata } from '../model/IChatMetadata';

class ChatService {
    private static socket: any;

    private constructor() {}

    public static connect(url:string){
        ChatService.socket = io.connect(url);
        ChatService.socket.on('message', this.receiveMessageHandler);
    }

    public static receiveMessageHandler(response: any){
        console.log("Received Message: ", response)
        const metadata: IChatMetadata = {
            numberOfExchanges: store.getState().chat.metadata.numberOfExchanges+=1,
            ...response.metadata
        }
        const message: IMessage = {
            id: '-1',
            text: response.message,
            ownerId: "other",
            timestamp: new Date()
        }
        store.dispatch(addMessage(message));
        store.dispatch(setMetadata(metadata));
        store.dispatch(addHistoryItem(metadata));
    }

    public static sendMessage(messageData: any){
        store.dispatch(addMessage(messageData.message))
        if(ChatService.socket){
            ChatService.socket.emit('message', messageData);
        }
    }
}

export default ChatService;
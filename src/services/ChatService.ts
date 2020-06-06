import io from 'socket.io-client';
import store from '../redux/store';
import { addMessages, setMetadata, addHistoryItem } from '../redux/chat/chatActions';
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

        store.dispatch(addMessages([response.input, response.output]));
        store.dispatch(setMetadata(metadata));
        store.dispatch(addHistoryItem({input: response.input, output: response.output, confidence: metadata.confidence, exchange: metadata.numberOfExchanges}));
    }

    public static sendMessage(messageData: any){
        if(ChatService.socket){
            ChatService.socket.emit('message', messageData);
        }
    }
}

export default ChatService;
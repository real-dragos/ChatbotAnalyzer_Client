import { IMessage } from "../model/IMessage";
import { IChatbot } from "../model/IChatbot";

class ConversionService {
    private constructor() { }

    public static convertToIMessage = (data: any): IMessage => ({
        id: data._id || data.id,
        text: data.text,
        ownerId: data.ownerId,
        timestamp: new Date(data.timestamp)
    })

    public static convertToIChatbot = (data: any): IChatbot => ({
        id: data._id,
        name: data.name,
        imageUrl: data.imageUrl,
        description: data.description,
        metadata: {
            intentsSize: data.intentsSize,
            vocabularySize: data.vocabularySize
        }
    })
}

export default ConversionService;
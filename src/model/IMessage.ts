export interface IMessage {
    id: string;
    ownerId?: string;
    text: string;
    timestamp: Date;
}
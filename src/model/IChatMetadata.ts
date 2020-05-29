export interface IChatMetadata{
    responseTime?: number;
    confidence?: number;
    numberOfExchanges: number;
    context?: string;
    intent?: string;
}
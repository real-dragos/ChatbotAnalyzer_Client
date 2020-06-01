export interface IChatMetadata{
    numberOfExchanges: number;
    responseTime?: number;
    confidence?: number;
    context?: string;
    intent?: string;
}
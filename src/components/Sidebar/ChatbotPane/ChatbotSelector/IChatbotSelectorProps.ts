export interface IChatbotSelectorProps{
    options: any[],
    selected?: string,
    onSelect: (event: any) => void;
}
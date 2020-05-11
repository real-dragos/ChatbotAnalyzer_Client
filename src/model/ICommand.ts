export interface ICommand {
    id: string,
    icon: JSX.Element,
    callback: () => void;
}
export interface ICommand {
    id: string,
    title: string,
    icon: JSX.Element,
    callback: () => void;
}
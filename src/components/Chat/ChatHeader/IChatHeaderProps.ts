export interface IChatHeaderProps {
    name: string;
    mobileView: boolean;
    toggleView: () => void;
    activeNotifications?: boolean;
    toggleNotifications?: () => void;
    clearMessages?: () => void;
}
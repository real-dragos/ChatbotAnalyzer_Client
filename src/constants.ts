// timestamp options
export const dateOptions = {
    day: '2-digit',
    weekday: 'short',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
}

// labels

export const intentsSizeLabel = 'Intents Size';
export const vocabularySizeLabel = 'Vocabulary Size';
export const reponseTimeLabel = 'Response Time';
export const contextLabel = 'Context';
export const intentLabel = 'Intent';
export const confidenceLabel = 'Confidence (%)';
export const loadindMessagesLabel = 'Loading Messages';
export const numberOfExchangesLabel = '# Exchanges';
// storage

export const assetsFolderUrl = "/assets"
export const defaultChatbotImageUrl = `${assetsFolderUrl}/chatbot_1.png`;
export const defaultChatbotName = 'Chatbot';
export const testUsername = "Dragos Lucian";
export const currentUserStorageName = "currentUser";

// urls
const localhost = 'http://localhost'
export const chatServiceUrl = `${localhost}:5000`;
export const chatbotsUrl = `${chatServiceUrl}/chatbots`;
export const usersUrl = `${chatServiceUrl}/users`;
export const messagesUrl = `${chatServiceUrl}/messages`;

// messages
export const unavailableServerError = "Server is unavailable";
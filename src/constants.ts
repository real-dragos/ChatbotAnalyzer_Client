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

export const refreshGraphButton = 'Refresh Chart';
export const exportGraphButton = 'Export Chart';
export const graphFilterType = 'chartTypes';
// storage

export const assetsFolderUrl = '/assets'
export const defaultChatbotImageUrl = `${assetsFolderUrl}/chatbot_1.png`;
export const defaultChatbotName = 'Chatbot';
export const testUsername = 'Dragos Lucian';
export const currentUserStorageName = 'currentUser';

// urls
const localhost = 'http://localhost'
export const chatServiceUrl = `${localhost}:5432`;
export const chatbotsUrl = `${chatServiceUrl}/chatbots`;
export const usersUrl = `${chatServiceUrl}/users`;
export const messagesUrl = `${chatServiceUrl}/messages`;
export const patternsUrl = `${chatServiceUrl}/patterns`;

// messages
export const unavailableServerError = 'Server is unavailable';
export const emptyMessageError = 'The message can\'t be empty';
export const enableNotificationMessage = 'Notifications Enabled';

// tooltip IDs
export const tooltipID = 'tooltip';
export const tooltipTitleID = 'tooltipTitle';
export const tooltipMessageID = 'tooltipMessage';
export const tooltipReplyID = 'tooltipReply';
export const tooltipValueID = 'tooltipValue';
export const tooltipBarID = 'tooltipBar';
export const tooltipBarValueID = 'tooltipBarValue';
export const tooltipBarFillID = 'tooltipBarFill';

// other
export const graphTitle = 'Conversation Chart (SESSION)';
export const confidenceChartId = 'confidenceChart';
export const defaultConfidenceLimit = 0.85;

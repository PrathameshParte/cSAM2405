/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function GetTimerDisplayText(clientAPI) {
    let clientData = clientAPI.getAppClientData();

    if (clientData.elapsedFormattedTime) {
        return "Duration: " + clientData.elapsedFormattedTime;
    }

    // Fallback if not started yet
    return 'Duration: 00:00:00';
}

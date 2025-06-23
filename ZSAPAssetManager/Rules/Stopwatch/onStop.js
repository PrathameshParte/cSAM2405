/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function onStop(clientAPI) {
    let clientData = clientAPI.getAppClientData();

    // Clear the timer interval if it exists
    if (clientData.timerInterval) {
        clearInterval(clientData.timerInterval);
        clientData.timerInterval = null;
    }

    // Reset the display to 00:00:00
    clientAPI.evaluateTargetPath("#Page:stopwatch_trialpage/#Control:Duration")
        .setValue("00:00:00");
}

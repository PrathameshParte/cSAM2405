/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function OnStopHeader(clientAPI) {
    let clientData = clientAPI.getAppClientData();

    if (clientData.timerInterval) {
        clearInterval(clientData.timerInterval);
        clientData.timerInterval = null;
    }

    // Reset the timer
    clientData.elapsedFormattedTime = '00:00:00';
    clientAPI.evaluateTargetPath("#Page:stopwatch_headertrial/#Control:Header").redraw();
}

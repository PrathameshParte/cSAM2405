/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function OnStartHeader(clientAPI) {
    let clientData = clientAPI.getAppClientData();

     // Clear existing interval if any
     if (clientData.timerInterval) {
        clearInterval(clientData.timerInterval);
    }
    
    clientData.startTime = new Date().getTime();

    clientData.timerInterval = setInterval(() => {
        let now = new Date().getTime();
        let elapsed = now - clientData.startTime;
        let totalSeconds = Math.floor(elapsed / 1000);

        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        let formattedTime = 
            String(hours).padStart(2, '0') + ':' +
            String(minutes).padStart(2, '0') + ':' +
            String(seconds).padStart(2, '0');

        // Save to clientData so UI can fetch it
        clientData.elapsedFormattedTime = formattedTime;
        clientAPI.evaluateTargetPath("#Page:stopwatch_headertrial/#Control:Header").redraw();
    }, 1000);
}

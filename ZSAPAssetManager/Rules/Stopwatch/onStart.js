/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function onStart(clientAPI) {
    let clientData = clientAPI.getAppClientData();
    clientData.startTime = new Date().getTime();

    clientData.timerInterval = setInterval(() => {
        let now = new Date().getTime();
        let elapsed = now - clientData.startTime; // milliseconds
        let totalSeconds = Math.floor(elapsed / 1000);

        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        // Pad with zeroes for consistent formatting
        let formattedTime = 
            String(hours).padStart(2, '0') + ':' +
            String(minutes).padStart(2, '0') + ':' +
            String(seconds).padStart(2, '0');

        clientAPI.evaluateTargetPath("#Page:stopwatch_trialpage/#Control:Duration")
            .setValue(formattedTime);
    }, 1000);
}

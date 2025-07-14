const endDate = new Date("27 Sep, 2025 22:00:00").getTime();
const startDate = new Date().getTime();

function updateTimer() {
    const now = new Date().getTime();
    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    // Calculate days, min, hrs, secs
    const oneDayInMillis = (24 * 60 * 60 * 1000);
    const oneHourInMillis  = (60 * 60 * 1000);
    const oneMinInMIllis = (60*1000);
    const oneSecondInMillis = (1000);

    const days = Math.floor(distancePending / (oneDayInMillis));
    const hours = Math.floor((distancePending%(oneDayInMillis) / (oneHourInMillis)));
    const mins = Math.floor((distancePending%(oneHourInMillis))/(oneMinInMIllis));
    const secs = Math.floor((distancePending%(oneMinInMIllis))/(oneSecondInMillis));


    // Populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = secs;

    // calculate  width covered
    const totalDistance = endDate - startDate;
    const percentageDistance = (distanceCovered/totalDistance)*100;

    // set width
    document.getElementById("progress-bar").style.width = percentageDistance + '%';

    // Negative time
    if(distancePending < 0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "END";
        document.getElementById("progress-bar").style.width = "100%" ;
    }


}
let x = setInterval(updateTimer,1000);
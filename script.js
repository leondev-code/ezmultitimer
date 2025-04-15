let timers = [];
let timerBox = [];
let timerText = [];
let cancelButton = [];
let timerList = document.getElementById("timerList");
function cancelTimer(index) {
    return function() {
        timers[index] = 0;
        timerText[index].innerHTML = "Cancelled";
        cancelButton[index].disabled = true;
        cancelButton[index].style.display = "none";
        timerBox[index].style.backgroundColor = "red";
    }
}
function startTimer(time) {
    timers.push(time);
    timerBox.push(document.createElement("div"));
    timerText.push(document.createElement("p"));
    cancelButton.push(document.createElement("button"));
    cancelButton[cancelButton.length - 1].innerHTML = "Cancel";
    timerList.appendChild(timerBox[timerBox.length - 1]);
    timerBox[timerBox.length-1].appendChild(timerText[timerText.length - 1]);
    timerText[timerText.length-1].appendChild(document.createTextNode(time));
    timerBox[timerText.length-1].appendChild(cancelButton[cancelButton.length - 1]);
    cancelButton[cancelButton.length - 1].onclick = cancelTimer(cancelButton.length - 1);
}

setInterval(decreaseTimers, 1000);
function decreaseTimers() {
    for (let i = 0; i < timers.length; i++) {
        if (timers[i] > -5) {
            timers[i]--;
        }
        if (timers[i]>=0) {
            timerText[i].innerHTML = timers[i];
        }
        if (timers[i]== -5) {
            timerList.removeChild(timerBox[i]);
            timers[i] = -6;
        }
        if (timers[i] == 0) {
            timerBox[i].style.backgroundColor="lime";
            timerText[i].innerHTML = "Finished";
            cancelButton[i].style.display = "none";
        }
    }
}
    // Check if the device is NOT mobile/tablet
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (!isMobile) {
        alert("Please use a Phone to use this app, it looks kinda weird on landscape mode, but it still works. It's also possible that it creates issues, which i wont fix.");
    }
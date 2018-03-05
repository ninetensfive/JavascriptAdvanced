function timer() {
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');

    let hoursSpan = $('#hours');
    let minutesSpan = $('#minutes');
    let secondsSpan = $('#seconds');


    let interval = null;
    let seconds = 0;

    startBtn.on('click', startTimer);
    stopBtn.on('click', stopTimer);


    function startTimer() {
        if(interval === null) {
            interval = setInterval(function (e) {
                seconds++;

                let hours = Math.trunc(seconds / 60 / 60);
                let minutes = Math.trunc(seconds / 60) - (hours * 60);
                let secs = seconds % 60;

                hoursSpan.text(('0' + hours).slice(-2));
                minutesSpan.text(('0' + minutes).slice(-2));
                secondsSpan.text(('0' + secs).slice(-2));


            }, 1000);
        }
    }

    function stopTimer() {
        clearInterval(interval);
        interval = null;
    }


}
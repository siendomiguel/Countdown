const getRemainTime = deadline => {
    let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};

const countDown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);

    const timerUpdate = setInterval( () => {
        let t = getRemainTime(deadline);
        el.innerHTML = `${t.remainDays}Día(s) - ${t.remainHours}Hora(s) - ${t.remainMinutes}Minuto(s) - ${t.remainSeconds}Segundo(s)`;

        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }
    }, 1000)
};

countDown('Jan 26 2021 22:00:05 GMT-0500', 'clock', 'Comenzamos');

//console.log(getRemainTime('Jan 26 2021 22:00:05 GMT-0500'));

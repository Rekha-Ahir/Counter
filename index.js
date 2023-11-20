setInterval(() => {
    let christ = new Date('22 jan 2024').getTime();
    let now_date = new Date().getTime()
    let diff = christ - now_date;
    let day = Math.floor(diff / (1000 * 24 * 60 * 60));
    let hours = Math.floor(diff % (1000 * 24 * 60 * 60) / (1000 * 60 * 60));
    let min = Math.floor((diff % (1000 * 24 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((diff % (1000 * 24 * 60 * 60)) / (1000));
    boxd.innerHTML = day;
    boxh.innerHTML = hours;
    boxm.innerHTML = min;
    boxs.innerHTML = sec;
}, 1000)

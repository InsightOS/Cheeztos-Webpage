const countdown = document.getElementById('countdown');
const countDownDate = new Date("Jan 13, 2022 12:00:00").getTime();

countdown.innerHTML = "Waiting.....";

const x = setInterval(() => {
    for (let i = 1; i <= 5; i++){
        setTimeout(() => console.log("Hey"), 1000);
    }
    //Okay this works now
    //this is like a while true
    //check discord
    console.log("Hello from timer :>");

    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        countdown.innerHTML = "HAPPY BIRTHDAY ";
        countdown.alert("Finished.")
    }
}, 1000);

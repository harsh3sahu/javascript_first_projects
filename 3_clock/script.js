const clock = document.getElementById('clock');



// clock.innerHTML=date.toLocaleTimeString();

setInterval(function () {

    let date = new Date();

    console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();


}, 1000)


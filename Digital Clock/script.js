function updateClock() {

    //real time clock
    var now = new Date();

    //extracting the clock (hours(23), minutes(59) and seconds(59))
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    //determining whether it's A.M or P.M based on the current hour
    var ampm = hours >= 12 ? 'PM' : 'AM';

    //12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;

    //adding leading zeros to hours, minutes and seconds if they are less than 10
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    //linking and updating the HTML document with the values. 
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("ampm").innerHTML = ampm;
}

//update the clock each second
setInterval(updateClock, 1000);
let hoursElement = document.getElementById('hours');
let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');


function currentMomunt(){
    let timestamp = new Date(); //current date and time
 console.log(timestamp);

 hoursElement.innerHTML = timestamp.getHours();
 minutesElement.innerHTML = timestamp.getMinutes();
 secondsElement.innerHTML = timestamp.getSeconds();
 
 
 
 
    console.log('Year :'+timestamp.getFullYear());
    console.log('Date :'+timestamp.getDate());
    console.log('Hourse :'+timestamp.getHours());
    console.log('Minutes :'+timestamp.getMinutes());
    console.log('Second :'+timestamp.getSeconds());
    console.log('Day :'+timestamp.getDay());
    console.log('Time :'+timestamp.getTime()); 

    
}

setInterval(currentMomunt,2000);  //call a function in regular interval
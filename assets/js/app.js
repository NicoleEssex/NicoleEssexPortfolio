$(document).foundation()

// retrieve current time to display proper greeting
function displayGreeting() {
    var elGreet = document.getElementById("greeting");
    var today = new Date();
    var time = today.getHours();
    if(time <= 11){
        elGreet.textContent = "Good Morning,";
    } else if(time >= 12 && time <=16){
        elGreet.textContent = "Good Afternoon,";
    } else {
        elGreet.textContent = "Good Evening,";
    }      
}
displayGreeting();

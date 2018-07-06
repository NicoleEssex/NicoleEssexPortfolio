$(document).foundation()

// retrieve current time to display proper greeting
function displayGreeting() {
    let elGreet = document.getElementById("greeting");
    let today = new Date();
    let time = today.getHours();
    if(time <= 11){
        elGreet.textContent = "Good Morning,";
    } else if(time >= 12 && time <=16){
        elGreet.textContent = "Good Afternoon,";
    } else {
        elGreet.textContent = "Good Evening,";
    }      
}
displayGreeting();

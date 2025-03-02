function updateClock() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    return timeString;
}
setInterval(updateClock, 1000);


// getDate function find out updated date

function getDate() {
let today = new Date(); 
// Extract individual parts of the date
let weekday = today.toLocaleDateString('en-US', { weekday: 'short' }); 
let month = today.toLocaleDateString('en-US', { month: 'short' });     
let day = today.getDate().toString().padStart(2, '0');                 
let year = today.getFullYear();                                        

let formattedDate = `${weekday} ,
${month} ${day} ${year}`;

return formattedDate;

}

let date=getDate();
document.getElementById("date").innerText=date;
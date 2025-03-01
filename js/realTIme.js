function updateClock() {
    let now = new Date();
    let timeString = now.toLocaleTimeString(); 
    return timeString;
}
setInterval(updateClock, 1000); 
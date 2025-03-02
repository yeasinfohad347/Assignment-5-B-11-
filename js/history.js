function trackHistory(value) {
    // get time from realTime.js file through function
    let time = updateClock();
    // create new div which contain history
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.innerText = `you have Complete the task ${value.innerText} at ${time}`;
    div.appendChild(p);
    div.classList.add("historyBox","p-3", "rounded-lg", "my-3", "bg-[#F4F7FF]");
    const container = document.getElementById("history");
    container.appendChild(div);
}

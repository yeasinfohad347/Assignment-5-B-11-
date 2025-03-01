function trackHistory(value) {
    // get time from funtion
    let time = updateClock();
    // create new div which contain history
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.innerText = `you have Complete the task ${value.innerText} at ${time}`;
    div.appendChild(p);
    div.classList.add("historyBox","p-3", "rounded-lg", "my-3", "bg-gray-300");
    // add div id name
    // div.id="historyBox";
    const container = document.getElementById("history");
    container.appendChild(div);
}

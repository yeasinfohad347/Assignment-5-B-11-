const buttons = document.getElementsByClassName("button");
const cardTitles=document.getElementsByClassName("card-title");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        const totalAssignment = document.getElementById("total-assignment").innerText;
        const totalTask = document.getElementById("totalTask").innerText;
        const convertTask = parseInt(totalTask);
        const convertTotal = parseInt(totalAssignment);


        if (convertTotal) {
            const totalCompleteAssignment = convertTotal - 1;
            document.getElementById("total-assignment").innerText = totalCompleteAssignment;

            const totalCompleteTask = convertTask + 1;
            document.getElementById("totalTask").innerText = totalCompleteTask;
            buttons[i].disabled = true;
            alert("Board Updated Successfully");
            trackHistory(cardTitles[i]);
            
        }
        
    });
}

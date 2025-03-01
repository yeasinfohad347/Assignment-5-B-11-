document.getElementById("changBtn").addEventListener("click",function(){
    // here 16 which i had use in toString ,it basically convert number into hexadecimal value
    let randomColor='#'+Math.floor(Math.random()*16777215).toString(16); 
    document.body.style.backgroundColor=randomColor;
})
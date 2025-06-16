let button = document.querySelector("button");
let result = document.querySelector(".result");


button.addEventListener("click", function() {
    let waterTemp = Number(document.querySelector("input").value);
    if (waterTemp >= 212) {
        result.innerHTML="Boiling!"
    } else if (waterTemp > 32 || waterTemp < 212) {
        result.innerHTML=""
    }
    // 1. Add an else-if and else so that:
    //  - If the water temp is greater than 32°, the user knows it's ok to drink.
    //  - If the water temp is 32° or less, the user knows the water is frozen.
    
    
});

// Bonus: According to research, 155°F is an optimal temperature for consuming hot drinks. 
//  - How would you improve the conditional statements above so that your code gives some more helpful information to the user?
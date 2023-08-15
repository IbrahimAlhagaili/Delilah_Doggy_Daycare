/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35; 
let numberOfDaysSelected = 0;



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

document.addEventListener("DOMContentLoaded", function() {
    const dayElements = document.querySelectorAll(".day-selector li");

    dayElements.forEach(function(dayElement) {
        dayElement.addEventListener("click", function() {
            if (dayElement.classList.contains("clicked")) {
                dayElement.classList.remove("clicked");
                numberOfDaysSelected--;
            } else {
                dayElement.classList.add("clicked");
                numberOfDaysSelected++;
            }
            calculateCost();
        });
    });
});



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

document.getElementById("clear-button").addEventListener("click", function() {
    const dayElements = document.querySelectorAll(".day-selector li");
    dayElements.forEach(function(dayElement) {
        dayElement.classList.remove("clicked");
    });
    // Reset the rate to full-day rate
    costPerDay = 35;
    document.getElementById("full").classList.add("clicked");
    document.getElementById("half").classList.remove("clicked");
    // Reset the number of days selected
    numberOfDaysSelected = 0;
    // Recalculate and update the cost
    calculateCost();
});



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

document.getElementById("half").addEventListener("click", function() {
    costPerDay = 20;
    this.classList.add("clicked");
    document.getElementById("full").classList.remove("clicked");
    calculateCost();
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

document.getElementById("full").addEventListener("click", function() {
    costPerDay = 35;
    this.classList.add("clicked");
    document.getElementById("half").classList.remove("clicked");
    calculateCost();
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    const calculatedCostElement = document.getElementById("calculated-cost");
    const totalCost = costPerDay * numberOfDaysSelected;
    calculatedCostElement.innerHTML = totalCost;
}
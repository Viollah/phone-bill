var callsTotal = 0;
var smsTotal = 0;

const billTypeTextElement = document.querySelector(".billTypeText").value;
const callTotalOneElement = document.querySelector(".callTotalOne").value;
const smsTotalOneElement = document.querySelector(".smsTotalOne").value;
const totalOneElement = document.querySelector(".totalOne").value;
const addToBillBtnElement = document.querySelector(".button-primary addToBillBtn").value;

function textBillTotal(){

    // ... other code here
    
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);
    
    //color the total based on the criteria
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
}
textTotalAddBtn.addEventListener('click', textBillTotal);
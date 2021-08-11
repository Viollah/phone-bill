

const billTypeText = document.querySelector(".billTyp3Text");
const callTotalOneElem = document.querySelector(".callTotalOne");
const smsTotalOneElem= document.querySelector(".smsTotalOne");
const totalOneElement = document.querySelector(".totalOne");
const addToBillBtnElement = document.querySelector(".addToBillBtn");


 function totalCost(billTypeText){
    // callsTotalElem.innerHTML = callsTotal.toFixed(2);
    // smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var billTypeEntered = billTypeText.value.trim();
    // totalCostElem.innerHTML = totalCost.toFixed(2);
    var callsTotal = 0;
    var smsTotal = 0;
    //color the total based on the criteria
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    

   callsTotalElem.innerHTML = callsTotal.toFixed(2);
   smsTotalElem.innerHTML = smsTotal.toFixed(2);
   totalCostElem.innerHTML = totalCost.toFixed(2);

 } 

function textBillTotal(){
    
    var totalCost = callsTotal + smsTotal;
   const billTypeEntered=totolCost(billTypeText);
   totalCostElem.innerHTML= billTypeEntered;

   // get the value entered in the billType textfield
   const currentTotal=Number(billTypeEntered);
    // update the correct total

    totalCostElem.classList.remove("danger");
    totalCostElem.classList.remove("warning");
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
    
    //update the totals that is displayed on the screen.

    totalCostElem.innerHTML = totalCost.toFixed(2);
}

textTotalAddBtn.addEventListener('click', textBillTotal);
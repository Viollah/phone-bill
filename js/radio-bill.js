

const billItemTypeWithSettingsElement = document.querySelector(".billItemTypeWithSettings").value;
const radioBillAddBtnElement = document.querySelector(".button-primary radioBillAddBtn").value;
const callTotalTwoElement = document.querySelector(".callTotalTwo").value;
const smsTotalTwoElement = document.querySelector(".smsTotalTwo").value;
const totalTwoElement = document.querySelector(".totalTwo").value;

var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
  
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




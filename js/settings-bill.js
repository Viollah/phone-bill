
const billItemTypeRadioElement = document.querySelector(".billItemTypeRadio").value;
const buttonElement = document.querySelector(".button-primary").value;
const callTotalSettingsElement = document.querySelector(".callTotalSettings").value;
const smsTotalSettingsElement = document.querySelector(".smsTotalSettings").value;
const totalSettingsElement = document.querySelector(".totalSettings").value;
const warningLevelSettingElement = document.querySelector(".u-full-width warningLevelSetting").value;
const button2Element = document.querySelector(".button-primary updateSettings").value;

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
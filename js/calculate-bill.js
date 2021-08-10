const billStringElement = document.querySelector(".billString");

function calculateBtnClicked(){
     // get the string entered in the textArea
     var billString = billStringElement.value;
     //split the string
     var billItems = billString.split(",");
     // a variable for the total phone bill.
     var billTotal = 0;
     //loop over all the bill items
     for (var i=0;i<billItems.length;i++){
         var billItem = billItems[i].trim();
         if (billItem === "call"){
             billTotal += 2.75;
         }
         else if (billItem === "sms"){
             billTotal += 0.75;
         }
     }
     
     //round to two decimals
     var roundedBillTotal = billTotal.toFixed(2);
     billTotalElement.innerHTML = roundedBillTotal;
}

calculateBtn.addEventListener('click', calculateBtnClicked);

function totalPhoneBill(phone){
    const list = phone.split(',');
    let counter = 0;
    for( var i=0;i<list.length;i++){  
      const currentItem = list[i].trim();
    if(currentItem.startsWith('call')){
    counter += 2.75;
    }
    else if(currentItem.startsWith('sms')) {
      counter += 0.65;
    }
      
    }
     return 'R' + counter.toFixed(2);
  }  


  describe('totalPhoneBill',function(){
    it("This should show the total phone bill of call,sms,call,sms",function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));

    })
    it("This should show the total phone bill of call,sms",function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
   
    })
    it("This shpuld show the total phone bill of sms,sms",function(){
      assert.equal('R1.30', totalPhoneBill('sms, sms'));
    })

});
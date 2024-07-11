//   Calculate Total
function getTextElementValueById(elementId){

    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    
    return currentPhoneTotal;
    }

function setTaxElementValueById(elementId,value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

    function calculateSubTotal (){
        //   Calculate Total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
setTaxElementValueById('sub-total',currentSubTotal);
    
    // calculate Tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTaxElementValueById('tax-amount',taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTaxElementValueById('final-total', finalAmount);
    }
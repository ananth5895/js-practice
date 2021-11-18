let calculateBtn = document.getElementById('calculate'),

 sellingPriceInput = document.getElementById('selling-price'),
 cogsInput = document.getElementById('cogs'),
 grossMarginInput = document.getElementById('gross-margin'),
 salesMarketingInput = document.getElementById('sales-marketing'),
 operationsCostInput = document.getElementById('operations-cost'),
 netMarginInput = document.getElementById('net-margin'),

 sellingPriceValue, cogsValue, grossMarginValue, salesMarketingValue, operationsCostValue, netMarginValue;

// console.log(calculateBtn);
function calculate(){
    sellingPriceValue = sellingPriceInput.value;
    cogsValue = cogsInput.value;
    grossMarginValue = sellingPriceValue - cogsValue;
    // console.log(grossMarginValue);
    grossMarginInput.value = grossMarginValue;
    salesMarketingValue = salesMarketingInput.value;
    operationsCostValue = operationsCostInput.value;

    netMarginValue =  grossMarginValue -  salesMarketingValue - operationsCostValue;
    netMarginInput.value = netMarginValue;
    
}

calculateBtn.addEventListener('click',calculate);

function kilometerToMeter(kilometer)
{
    var meter= Math.abs(kilometer)*1000;
    return meter;
}

// var result=kilometerToMeter(-6);
// console.log(result);

function budgetCalculator(watch, mobile, laptop)
{
    var watchPrice=Math.abs(watch)*50;
    var mobilePrice=Math.abs(mobile)*100;
    var laptopPrice=Math.abs(laptop)*500;
    var totalBudget=watchPrice+mobilePrice+laptopPrice;

    return totalBudget;
}

// var result=budgetCalculator(2,2,2);
// console.log(result);


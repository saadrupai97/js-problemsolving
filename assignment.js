function kilometerToMeter(kilometer) {
    var meter = Math.abs(kilometer) * 1000;
    return meter;
}

// var result=kilometerToMeter(-6);
// console.log(result);

function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = Math.abs(watch) * 50;
    var mobilePrice = Math.abs(mobile) * 100;
    var laptopPrice = Math.abs(laptop) * 500;
    var totalBudget = watchPrice + mobilePrice + laptopPrice;

    return totalBudget;
}

// var result=budgetCalculator(2,2,2);
// console.log(result);


function hotelCost(numberOfDays) {
    var days = Math.abs(numberOfDays);
    var cost = 0;
    if (days <= 10) {
        cost = days * 100;
    }
    else if (days <= 20) {
        var firstPeriod = 10 * 100;
        var remaining = days - 10;
        var secondPeriod = remaining * 80;
        cost = firstPeriod + secondPeriod;
    }
    else {
        var firstPeriod = 10 * 100;
        var secondPeriod = 10 * 80;
        var remaining = days - 20;
        var thirdPeriod = remaining * 50;
        cost = firstPeriod + secondPeriod + thirdPeriod;
    }
    return cost;
}

// var result=hotelCost(21);
// console.log(result);

function megaFriend(names) {
    var max = names[0].length;
    var maxName=' ';
    for (var i=0; i<names.length; i++) {

        if (names[i] == ' ') {
            continue;
        }

        else {
            count = names[i].length
            if (count > max) {
                max = count;
                maxName=names[i];
            }
        }
    }
    return maxName;   
}

// var name = [' ', 'gotze', ' ', 'sakibs'];
// var max = megaFriend(name);
// console.log(max);
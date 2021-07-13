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

    var days = Math.abs(numberOfDays);            //changing negative inputs into positive
    var cost = 0;
    if (days <= 10) {                             //first case from day 1 to day 10 where rent is 100
        cost = days * 100;  
    }
    else if (days <= 20) {                        //second case from day 11 to day 20 where rent is 80
        var firstPeriod = 10 * 100;
        var remaining = days - 10;
        var secondPeriod = remaining * 80;
        cost = firstPeriod + secondPeriod;
    }
    else {                                        //third case from day 21 to unlimited where rent is 50
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
    var max = names[0].length;                    //taking initial length of first name to compare 
    var maxName = ' ';
    for (var i = 0; i < names.length; i++) {

        if (names[i] == ' ') {                    //to avoid wrong whitespace inputs
            continue;
        }

        else {
            count = names[i].length
            if (count > max) {
                max = count;
                maxName = names[i];               //storing the name of max length of character count 
            }
        }
    }
    return maxName;
}

// var name = [' ', 'gotze', ' ', 'sakibs'];
// var max = megaFriend(name);
// console.log(max);


// first problem 
function kilometerToMeter( meter ){
    if( meter < 0 ){
        return  "meter can't be negative" ;
    }
    else{
        const kilometer = meter / 1000; 
        return kilometer;
    }
}

const kiloConvert = kilometerToMeter( 1000 );
console.log( kiloConvert );

// scound problem 

function budgetCalculator( watch, phone, laptop ){
    const watchSum = watch * 50;
    const phoneSum = phone * 100;
    const laptopSum = laptop * 500; 

    const totalAmount = watchSum + phoneSum + laptopSum; 

    return totalAmount;
}

// third problem 

function hotelCost( days ){
    if (days > 20){
        let thirdWeekAmount = days - 20;
        thirdWeekAmount = thirdWeekAmount * 50; 
        let scoundWeekAmount = 10 * 80;
        let firstWeekAmount = 10 * 100;

        let totalSum = firstWeekAmount + scoundWeekAmount + thirdWeekAmount; 
        return totalSum;

    }
    else if ( days > 10 && days <= 20 ){
        secWeek = days - 10; 
        secWeek = secWeek * 80;
        firstWeek = 10 * 100;
        let result = secWeek + firstWeek;
        return result;
    }
    else{
        let amount1 = days * 100;
        return amount1;
    }
}

let hotelBudgetResult = hotelCost( 50 );
console.log(hotelBudgetResult);

// fourth problem 


function megaFriend( names ){
    for (let i = 0; i < names.length; i++) {
        const maxElement = names[0].length; 
        const element = names[i];
        let elementcount = element.length;

        if ( elementcount > maxElement ){
            maxElement = elementcount;
            return maxElement; 
        }
        
    }
}

let bigFriendName = megaFriend( ['likhon', 'shuvonala', 'juel'] );
console.log(bigFriendName);
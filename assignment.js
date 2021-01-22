

//kilometertoMeter Problem
function kilometerToMeter(n=0){

    if ( n<= 0){

        console.log("Your input is not right. It must be greater than 0");

    }
    else{
        var meter = n*1000; // 1km=1000 meter
        return meter;
    }
}
var lengthInMeter = kilometerToMeter(1.5);
console.log(lengthInMeter);



//budgetCalculator Problem
function budgetCalculator(watch=0, phone=0, laptop=0){

    if ( watch< 0){

        console.log("Number of Watches must be above than 0");

    }
    if ( phone< 0){

        console.log("Number of phones must be above than 0");

    }
    if ( laptop< 0){

        console.log("Number of laptops must be above than 0");

    }
    else{

        return watch*50 + phone*100 + laptop*500;
    }

}
var totalBudget = budgetCalculator(2,1,2);
console.log(totalBudget);


//hotelCost Problem
function hotelCost(hoteldays = 0) {
    if (hoteldays <= 0){
       console.log("Number Of Days In Hotel Must Be Greater Than 0"); 
    }
    else if (hoteldays <= 10) {
        return hoteldays * 100;
    } 
    else if (hoteldays <= 20) {
        return 10 * 100 + (hoteldays - 10) * 80;
    } 
    else {
        var totalCost = 10 * 100 + 10 * 80 + (hoteldays - 20) * 50;
        return totalCost;
    }
}
console.log(hotelCost(30));


//megaFriend Problem
function megaFriend(friends) {

  var word = "";
  for (var i = 0; i < friends.length; i++) {
    if (word.length < friends[i].length) {
      word = friends[i];
    }
  }
  return word;
}

console.log(megaFriend(['neela', 'zabir','Ayesha','Mahmud','Shimo']));


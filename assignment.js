//problem 1 : sheer to mon
function seerToMon(seer) {
    let mon = seer / 40;

   
    if (typeof seer != 'number') {
        return 'please give a number';
    }

    return mon;
}
let measureOfSeer = 40;
let mon = seerToMon(measureOfSeer);
console.log(mon);

//problem 2: total Sales

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;
    // calculation
    const shirtSale = shirtQuantity * perShirtPrice;
    const pantSale = pantQuantity * perPantPrice;
    const shoeSale = shoeQuantity * perShoePrice;
    // adding all products quantity
    const totalProducts = shirtSale + pantSale + shoeSale;
    // error 
    if (typeof perPantPrice != "number") {
        return 'Please enter a number';
    }
    //return
    return totalProducts;
}

const productsSales = totalSales(3, 5, 6);
console.log(productsSales);

//problem 3: Delivery Cost 

function deliveryCost(shirtQuantity) {
    if (shirtQuantity > 0 && shirtQuantity <= 100) {
        shirtPrice = shirtQuantity * 100;
    }
    else if (shirtQuantity > 100 && shirtQuantity <= 200) {
        shirtPrice = (shirtQuantity - 101) * 80;
        shirtPrice += 100 * 100;
    }
    else if (shirtQuantity > 200) {
        shirtPrice = (shirtQuantity - 201) * 50;
        shirtPrice += (99 * 80);
        shirtPrice += (100 * 100);
    }
    //error text 
    else if (shirtQuantity == -1) {
        return 'Error ,Negative value';
    }
    //else condition
    else {
        return 'Out of stock';
    }
    //total shirtprice
    return shirtPrice;

}
let totalMoney = deliveryCost(1);
console.log(totalMoney);

//Problem : 4 perfectfriend


const names = ['Anamika', 'Borna', 'Ana', 'Samia', 'Raiaa', 'Fatema'];
/* for checking error text took input
const names = 11;
*/
function perfectFriend(names) {
    var largest = names.length;
    for (let i = 0; i < largest; i++) {
        var n = names[i].length;
        if (n == 5) {
            return names[i];
        }
    }
    //error text 
    if (names.length != 5 && typeof names !== 'string') {
        return 'enter a string';
    }

}
const giveName = perfectFriend(names);
console.log('Perfect Friend Name ', giveName);
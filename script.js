var mountainsArray = [
    { name: "Killmanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
function findNameOfTallestMountain(mountains) {
    var mHeight = [];
    mountains.forEach(function (mountain) {
        mHeight.push(mountain.height);
    });
    //   console.log(mHeight);
    var math = Math.max.apply(Math, mHeight);
    //   console.log(math);
    var storage;
    mountains.forEach(function (mountain) {
        // console.log(mountain);
        if (math === mountain.height) {
            //   console.log("Got Here");
            storage = mountain.name;
        }
    });
    return storage;
}
console.log(findNameOfTallestMountain(mountainsArray));
var products = [
    { name: "WoW Subscription", price: 15 },
    { name: "Levi Jeans", price: 50 },
    { name: "Xbox one Controller", price: 60 }
];
function calcAverageProductPrice(products) {
    var avgPrice = 0;
    products.forEach(function (product) {
        avgPrice += product.price;
    });
    var pass = avgPrice / products.length;
    return pass;
}
console.log(calcAverageProductPrice(products));

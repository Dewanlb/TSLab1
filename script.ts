interface Mountain {
  name: string;
  height: number;
}
let mountainsArray: Mountain[] = [
  { name: "Killmanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 }
];

function findNameOfTallestMountain(mountains: Mountain[]): any {
  let mHeight: number[] = [];

  mountains.forEach(mountain => {
    mHeight.push(mountain.height);
  });
  //   console.log(mHeight);
  let math = Math.max(...mHeight);
  //   console.log(math);
  let storage;
  mountains.forEach(mountain => {
    // console.log(mountain);
    if (math === mountain.height) {
      //   console.log("Got Here");
      storage = mountain.name;
    }
  });
  return storage;
}
console.log(findNameOfTallestMountain(mountainsArray));

interface Product {
  name: string;
  price: number;
}
let products: Product[] = [
  { name: "WoW Subscription", price: 15 },
  { name: "Levi Jeans", price: 50 },
  { name: "Xbox one Controller", price: 60 }
];
function calcAverageProductPrice(products: Product[]): number {
  let avgPrice: number = 0;
  products.forEach(product => {
    avgPrice += product.price;
  });
  let pass = avgPrice / products.length;

  return pass;
}
console.log(calcAverageProductPrice(products));

interface InventoryItem {
  product: Product;
  quantity: number;
}
let inventory: InventoryItem[] = [
  { product: { name: "WoW Subscription", price: 15 }, quantity: 3 },
  { product: { name: "Levi Jeans", price: 50 }, quantity: 4 },
  { product: { name: "Xbox one Controller", price: 60 }, quantity: 2 }
];

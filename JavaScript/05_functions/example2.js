function shoppingBasket (amount, numberOfGoods, promocode) {
  // если товаров >= 10 скидка 5%
  if (numberOfGoods >= 10) {
    discount = amount * 0.05;
    amount -= discount;
  }
  // если промокод ДАРИМ300 (-300)
  if (promocode === "ДАРИМ300") {
   return (amount <= 300) ? amount = 0 : amount -= 300;
  }
  // промокод СКИДКА15% и сумма товаров 20 000 скидка 15%
  if (promocode === "СКИДКА15" && amount >= 20000) {
    discount = amount * 0.15;
    amount -= discount;
  }
  // если сумма товаров на 50 000 скидка 20%
  if (amount > 50000) {
    excessAmount = amount - 50000;//excess = 40 000
    discount = excessAmount * 0.2; //discount = 8 000
    excessAmount -= discount;// excess = 32 000
    return excessAmount + 50000;
  }

  // console.log(amount);
}

let price = 10000;
let numberOfGoods = 10;
let discount = 0;
let promocode = null;
let amount = price * numberOfGoods;


let totalAmount = shoppingBasket(amount, numberOfGoods, promocode);

console.log(totalAmount);
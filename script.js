const DATA = require("./data.json");
const MARKUP = 15;

function setPrices(productPrices) {
  const newProductPrices = {};
  const factor = (1 + MARKUP / 100)
  for (let product in productPrices) {
    newProductPrices[product] =
      Math.round(
        Math.round(
          productPrices[product] * factor) / 5) 
            * 5;
  }
  return newProductPrices
}

console.log(setPrices(DATA)); 

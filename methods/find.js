const products = [
  {
    name: "Macbook Pro M1",
    price: 17999000,
  },
  {
    name: "Macbook Pro M2",
    price: 22000000,
  },
];

function findProduct(product) {
  const result = product.price > 20000000;
  console.log(
    `${product.name} (Rp. ${product.price}) greater than 20jt is = ${result}`
  );
  return result;
}

products.find(findProduct); // callback param

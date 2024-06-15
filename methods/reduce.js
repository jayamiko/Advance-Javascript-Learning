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
// reduce for array type
const result = products.reduce(sumprices);

// callback()
function sumprices(prev, curr, index, array) {
  const result = prev + curr;
  return result;
}

export const customerData = Array.from({length: 20}, (_, index) => ({
  id: Date.now() + Math.random().toString(36).substring(2, 8),
  name: `Customer ${index + 1}`,
}));

export const itemData = Array.from({length: 20}, (_, index) => ({
  id: Date.now() + Math.random().toString(36).substring(2, 8),
  item: `Item ${index + 1}`,
  price: getRandomPrice(),
}));

function getRandomPrice() {
  const minPrice = 100;
  const maxPrice = 999;
  return (Math.random() * (maxPrice - minPrice) + minPrice).toFixed(0);
}

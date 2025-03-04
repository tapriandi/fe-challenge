export const calculateDiscountedPrice = (
  price: number,
  discountPercentage: number,
): number => {
  const discountAmount = (price * discountPercentage) / 100;
  return parseFloat((price - discountAmount).toFixed(2));
};

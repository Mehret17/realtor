const formatPrice = (dollars) => {
  return dollars.toLocaleString(
    'en-us',
    {
      style: 'currency',
      currency: 'usd',
    }
  );
};

export { formatPrice };

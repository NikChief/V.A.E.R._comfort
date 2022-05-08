module.exports.getLowerPrice = (patterns) => patterns.map((pattern) => ({
  ...pattern.dataValues,
  Items: {
    lower_price: pattern.dataValues.Items
      .reduce((lowerPrice, item) => (lowerPrice < item.dataValues.price
        ? lowerPrice : item.dataValues.price), pattern.dataValues.Items[0].dataValues.price),
  },
}));

module.exports.getPriceRange = (patterns) => patterns.map((pattern) => ({
  ...pattern.dataValues,
  Items: {
    price: pattern.dataValues.Items
      .reduce(
        (prices, item) => ({
          lowerPrice: (prices.lowerPrice < item.dataValues.price
            ? prices.lowerPrice : item.dataValues.price),
          highest: (prices.highest > item.dataValues.price
            ? prices.highest : item.dataValues.price),
        }),
        { lowerPrice: pattern.dataValues.Items[0].dataValues.price, highest: 0 },
      ),
  },
}));

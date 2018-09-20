const calculationPairRate = (item, propss) => {
  console.log("ITEM", item);
  console.log("PROPS", propss);
  switch (propss.activeCurrencyCode) {
    case "byn":
      return propss.activeCurrencyCode === item.kodval
        ? propss.amountCurrency
        : (propss.amountCurrency / item.price).toFixed(2);

    case "usd":
      switch (item.kodval) {
        case "byn":
          return item.kodpara.split("_")[2] === "buy"
            ? (
                propss.amountCurrency * propss.coursesBanksArray[3].price
              ).toFixed(2)
            : (
                propss.amountCurrency * propss.coursesBanksArray[2].price
              ).toFixed(2);
        // (propss.amountCurrency * propss.activPriceBuy).toFixed(2);
        case "usd":
          return propss.amountCurrency;
        case "eur":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "gbp":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "chf":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "rub":
          return item.kodpara.split("_")[2] === "buy"
            ? (
                propss.amountCurrency * propss.coursesBanksArray[27].price
              ).toFixed(2)
            : (
                propss.amountCurrency * propss.coursesBanksArray[26].price
              ).toFixed(2);
        case "uah":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "pln":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "czk":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "kzt":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "cny":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        default:
      }
      break;

    case "eur":
      switch (item.kodval) {
        case "byn":
          return item.kodpara.split("_")[2] === "buy"
            ? (
                propss.amountCurrency * propss.coursesBanksArray[5].price
              ).toFixed(2)
            : (
                propss.amountCurrency * propss.coursesBanksArray[4].price
              ).toFixed(2);
        // (propss.amountCurrency * propss.activPriceBuy).toFixed(2);
        case "usd":
          return item.kodpara.split("_")[2] === "buy"
            ? (
                propss.amountCurrency * propss.coursesBanksArray[23].price
              ).toFixed(2)
            : (
                propss.amountCurrency * propss.coursesBanksArray[22].price
              ).toFixed(2);
        case "eur":
          return propss.amountCurrency;
        case "gbp":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "chf":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "rub":
          return item.kodpara.split("_")[2] === "buy"
            ? (
                propss.amountCurrency * propss.coursesBanksArray[25].price
              ).toFixed(2)
            : (
                propss.amountCurrency * propss.coursesBanksArray[24].price
              ).toFixed(2);
        case "uah":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "pln":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "czk":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "kzt":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "cny":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        default:
      }
      break;

    case "gbp":
      switch (item.kodval) {
        case "byn":
          return item.kodpara.split("_")[2] === "buy"
            ? (
                propss.amountCurrency * propss.coursesBanksArray[7].price
              ).toFixed(2)
            : (
                propss.amountCurrency * propss.coursesBanksArray[6].price
              ).toFixed(2);
        // (propss.amountCurrency * propss.activPriceBuy).toFixed(2);
        case "usd":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "eur":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "gbp":
          return propss.amountCurrency;
        case "chf":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "rub":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "uah":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "pln":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "czk":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "kzt":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "cny":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        default:
      }
      break;

    case "chf":
      switch (item.kodval) {
        case "byn":
          return item.kodpara.split("_")[2] === "buy"
            ? (
                propss.amountCurrency * propss.coursesBanksArray[9].price
              ).toFixed(2)
            : (
                propss.amountCurrency * propss.coursesBanksArray[8].price
              ).toFixed(2);
        // (propss.amountCurrency * propss.activPriceBuy).toFixed(2);
        case "usd":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "eur":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "gbp":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "chf":
          return propss.amountCurrency;
        case "rub":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "uah":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "pln":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "czk":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "kzt":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "cny":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        default:
      }
      break;

    case "rub":
      switch (item.kodval) {
        case "byn":
          return item.kodpara.split("_")[2] === "buy"
            ? (
                propss.amountCurrency * propss.coursesBanksArray[11].price
              ).toFixed(2)
            : (
                propss.amountCurrency * propss.coursesBanksArray[10].price
              ).toFixed(2);
        // (propss.amountCurrency * propss.activPriceBuy).toFixed(2);
        case "usd":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "eur":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "gbp":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "chf":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "rub":
          return propss.amountCurrency;
        case "uah":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "pln":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "czk":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "kzt":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "cny":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        default:
      }
      break;

    case "uah":
      switch (item.kodval) {
        case "byn":
          return item.kodpara.split("_")[2] === "buy"
            ? (
                propss.amountCurrency * propss.coursesBanksArray[13].price
              ).toFixed(2)
            : (
                propss.amountCurrency * propss.coursesBanksArray[12].price
              ).toFixed(2);
        // (propss.amountCurrency * propss.activPriceBuy).toFixed(2);
        case "usd":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "eur":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "gbp":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "chf":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "rub":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "uah":
          return propss.amountCurrency;
        case "pln":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "czk":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "kzt":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "cny":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        default:
      }
      break;

    case "pln":
      switch (item.kodval) {
        case "byn":
          return item.kodpara.split("_")[2] === "buy"
            ? (
                propss.amountCurrency * propss.coursesBanksArray[15].price
              ).toFixed(2)
            : (
                propss.amountCurrency * propss.coursesBanksArray[14].price
              ).toFixed(2);
        // (propss.amountCurrency * propss.activPriceBuy).toFixed(2);
        case "usd":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "eur":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "gbp":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "chf":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "rub":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "uah":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "pln":
          return propss.amountCurrency;
        case "czk":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "kzt":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "cny":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        default:
      }
      break;

    case "czk":
      switch (item.kodval) {
        case "byn":
          return item.kodpara.split("_")[2] === "buy"
            ? (
                propss.amountCurrency * propss.coursesBanksArray[17].price
              ).toFixed(2)
            : (
                propss.amountCurrency * propss.coursesBanksArray[16].price
              ).toFixed(2);
        // (propss.amountCurrency * propss.activPriceBuy).toFixed(2);
        case "usd":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "eur":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "gbp":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "chf":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "rub":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "uah":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "pln":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "czk":
          return propss.amountCurrency;
        case "kzt":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "cny":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        default:
      }
      break;

    case "kzt":
      switch (item.kodval) {
        case "byn":
          return item.kodpara.split("_")[2] === "buy"
            ? (
                propss.amountCurrency * propss.coursesBanksArray[19].price
              ).toFixed(2)
            : (
                propss.amountCurrency * propss.coursesBanksArray[18].price
              ).toFixed(2);
        // (propss.amountCurrency * propss.activPriceBuy).toFixed(2);
        case "usd":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "eur":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "gbp":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "chf":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "rub":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "uah":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "pln":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "czk":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "kzt":
          return propss.amountCurrency;
        case "cny":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        default:
      }
      break;

    case "cny":
      switch (item.kodval) {
        case "byn":
          return item.kodpara.split("_")[2] === "buy"
            ? (
                propss.amountCurrency * propss.coursesBanksArray[20].price
              ).toFixed(2)
            : (
                propss.amountCurrency * propss.coursesBanksArray[21].price
              ).toFixed(2);
        // (propss.amountCurrency * propss.activPriceBuy).toFixed(2);
        case "usd":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "eur":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "gbp":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "chf":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "rub":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "uah":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "pln":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "czk":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "kzt":
          return (
            (propss.amountCurrency * propss.activPriceBuy) /
            item.price
          ).toFixed(2);
        case "cny":
          return propss.amountCurrency;
        default:
      }
      break;

    default:
  }
};
export default calculationPairRate;

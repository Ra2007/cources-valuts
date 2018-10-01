const getCrdBankBuy = (val1, val2, props) => {
  console.log(val1, val2, props);
  switch (val1) {
    case "byn":
      switch (val2) {
        case "usd":
          return props.coursesBanksArray[3];

        case "eur":
          return props.coursesBanksArray[5];
        case "gbp":
          return props.coursesBanksArray[7];
        case "chf":
          return props.coursesBanksArray[9];
        case "rub":
          return props.coursesBanksArray[11];
        case "uah":
          return props.coursesBanksArray[13];
        case "pln":
          return props.coursesBanksArray[15];
        case "czk":
          return props.coursesBanksArray[17];
        case "kzt":
          return props.coursesBanksArray[19];
        case "cny":
          return props.coursesBanksArray[21];

        default:
      }
      break;

    case "usd":
      switch (val2) {
        case "byn":
          return props.coursesBanksArray[2];
        case "eur":
          return props.coursesBanksArray[22];
        case "rub":
          return props.coursesBanksArray[26];

        default:
      }
      break;

    case "eur":
      switch (val2) {
        case "byn":
          return props.coursesBanksArray[4];
        case "usd":
          return props.coursesBanksArray[22];
        case "rub":
          return props.coursesBanksArray[24];

        default:
      }
      break;

    case "gbp":
      switch (val2) {
        case "byn":
          return props.coursesBanksArray[6];

        default:
      }
      break;

    case "chf":
      switch (val2) {
        case "byn":
          return props.coursesBanksArray[8];

        default:
      }
      break;

    case "rub":
      switch (val2) {
        case "byn":
          return props.coursesBanksArray[10];
        case "usd":
          return props.coursesBanksArray[26];
        case "eur":
          return props.coursesBanksArray[24];

        default:
      }
      break;

    case "uah":
      switch (val2) {
        case "byn":
          return props.coursesBanksArray[12];

        default:
      }
      break;

    case "pln":
      switch (val2) {
        case "byn":
          return props.coursesBanksArray[14];

        default:
      }
      break;

    case "czk":
      switch (val2) {
        case "byn":
          return props.coursesBanksArray[16];

        default:
      }
      break;

    case "kzt":
      switch (val2) {
        case "byn":
          return props.coursesBanksArray[18];

        default:
      }
      break;

    case "cny":
      switch (val2) {
        case "byn":
          return props.coursesBanksArray[20];

        default:
      }
      break;

    default:
  }
};

export default getCrdBankBuy;

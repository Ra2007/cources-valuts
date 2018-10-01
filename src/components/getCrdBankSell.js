const getCrdBankSell = (val1, val2, props) => {
  console.log(val1, val2, props);
  switch (val1) {
    case "byn":
      switch (val2) {
        case "usd":
          return props.coursesBanksArray[2];

        case "eur":
          return props.coursesBanksArray[4];
        case "gbp":
          return props.coursesBanksArray[6];
        case "chf":
          return props.coursesBanksArray[8];
        case "rub":
          return props.coursesBanksArray[10];
        case "uah":
          return props.coursesBanksArray[12];
        case "pln":
          return props.coursesBanksArray[14];
        case "czk":
          return props.coursesBanksArray[16];
        case "kzt":
          return props.coursesBanksArray[18];
        case "cny":
          return props.coursesBanksArray[20];

        default:
      }
      break;

    case "usd":
      switch (val2) {
        case "byn":
          return props.coursesBanksArray[3];
        case "eur":
          return props.coursesBanksArray[23];
        case "rub":
          return props.coursesBanksArray[27];

        default:
      }
      break;

    case "eur":
      switch (val2) {
        case "byn":
          return props.coursesBanksArray[5];
        case "usd":
          return props.coursesBanksArray[23];
        case "rub":
          return props.coursesBanksArray[25];

        default:
      }
      break;

    case "gbp":
      switch (val2) {
        case "byn":
          return props.coursesBanksArray[7];

        default:
      }
      break;

    case "chf":
      switch (val2) {
        case "byn":
          return props.coursesBanksArray[9];

        default:
      }
      break;

    case "rub":
      switch (val2) {
        case "byn":
          return props.coursesBanksArray[11];
        case "usd":
          return props.coursesBanksArray[27];
        case "eur":
          return props.coursesBanksArray[25];

        default:
      }
      break;

    case "uah":
      switch (val2) {
        case "byn":
          return props.coursesBanksArray[13];

        default:
      }
      break;

    case "pln":
      switch (val2) {
        case "byn":
          return props.coursesBanksArray[15];

        default:
      }
      break;

    case "czk":
      switch (val2) {
        case "byn":
          return props.coursesBanksArray[17];

        default:
      }
      break;

    case "kzt":
      switch (val2) {
        case "byn":
          return props.coursesBanksArray[19];

        default:
      }
      break;

    case "cny":
      switch (val2) {
        case "byn":
          return props.coursesBanksArray[21];

        default:
      }
      break;

    default:
  }
};

export default getCrdBankSell;

import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";
import calculationPairRate from "./components/calculationPairRate";
import sortingListBanks from "./components/sortingListBanks";
import uk from "./picture.svg";

class FirstScreen extends Component {
  // constructor() {
  //   super();
  //   this.props.state.amountCurrency =
  //     this.props.state.buyStatus == "buy"
  //       ? this.props.state.coursesBanksArray[3].price
  //       : this.props.state.coursesBanksArray[2].price;
  // }
  handleFocus = event => {
    event.target.select();
  };

  componentDidMount = () => {
    var inputfocus = ReactDOM.findDOMNode(this.refs.byn);
    inputfocus.focus();
  };

  handleFilterChage = e => {
    const valact11 = e.currentTarget.dataset.value;
    this.props.state.handleActivPriceST(Object.values(e.currentTarget)[1].data);
    this.props.state.handleSetQntST(document.getElementById(valact11).value);
    this.props.state.changeFilterST(e.currentTarget.dataset.value);
    this.props.state.izmststST();
  };

  vivodpari = item => {
    let size = {
      width: `${calculationPairRate(item, this.props.state).length * 14 ||
        4 * 14}px`
    };

    return (
      <div
        className={
          this.props.state.activeCurrencyCode === item.kodval
            ? "block-curces active"
            : "block-curces"
        }
        key={item.id}
      >
        <div className="input-block">
          <input
            type="text"
            style={size}
            value={calculationPairRate(item, this.props.state)}
            id={item.kodval}
            onChange={this.handleSetQntMnl}
            key={item.id}
            data-value={item.kodval}
            data={item.price}
            onClick={
              this.props.state.activeCurrencyCode !== item.kodval
                ? this.handleFilterChage
                : this.zaglushka
            }
            name={item.id}
            ref={item.kodval}
            onFocus={this.handleFocus}
          />
        </div>

        <div className="img-flags-block">
          <img
            src={"/flags/" + item.kodval + ".png"}
            className="rounded float-right"
            alt={item.name}
            title={item.name}
            data={item.price}
            data-value={item.kodval}
            onClick={this.clickFlagFocusInput}
          />
        </div>

        <div className="bottom-content-block">
          {this.props.state.activeCurrencyCode === item.kodval
            ? this.toggle(item)
            : this.viewerBanks(item)}
        </div>
      </div>
    );
  };

  toggle = item => {
    return (
      <div className="toggle-text">
        <div
          className={
            item.kodpara.split("_")[2] === "buy"
              ? "switch-btn switch-on"
              : "switch-btn"
          }
          onClick={this.changeToggleTotal}
          data-value={item.kodval}
        >
          <span>
            {item.kodpara.split("_")[2] === "sell" ? "абмяняць" : "набыць"}
          </span>
        </div>
      </div>
    );
  };

  changeToggleTotal = e => {
    const valact = e.currentTarget.dataset.value;
    this.props.state.handleSetQntST(document.getElementById(valact).value);
    this.props.state.changeToggleST(e.currentTarget.className);
  };

  viewerBanks = item => {
    switch (this.props.state.activeCurrencyCode) {
      case "byn":
        return this.spisokBankov(item);

      case "usd":
        switch (item.kodval) {
          case "byn":
            return item.kodpara.split("_")[2] === "buy"
              ? this.spisokBankov(this.props.state.coursesBanksArray[3])
              : this.spisokBankov(this.props.state.coursesBanksArray[2]);
          case "eur":
            return item.kodpara.split("_")[2] === "buy"
              ? this.spisokBankov(this.props.state.coursesBanksArray[23])
              : this.spisokBankov(this.props.state.coursesBanksArray[22]);
          case "rub":
            return item.kodpara.split("_")[2] === "buy"
              ? this.spisokBankov(this.props.state.coursesBanksArray[27])
              : this.spisokBankov(this.props.state.coursesBanksArray[26]);
          default:
        }
        break;
      case "eur":
        switch (item.kodval) {
          case "byn":
            return item.kodpara.split("_")[2] === "buy"
              ? this.spisokBankov(this.props.state.coursesBanksArray[5])
              : this.spisokBankov(this.props.state.coursesBanksArray[4]);
          case "usd":
            return item.kodpara.split("_")[2] === "buy"
              ? this.spisokBankov(this.props.state.coursesBanksArray[23])
              : this.spisokBankov(this.props.state.coursesBanksArray[22]);
          case "rub":
            return item.kodpara.split("_")[2] === "buy"
              ? this.spisokBankov(this.props.state.coursesBanksArray[25])
              : this.spisokBankov(this.props.state.coursesBanksArray[24]);
          default:
        }
        break;
      case "gbp":
        switch (item.kodval) {
          case "byn":
            return item.kodpara.split("_")[2] === "buy"
              ? this.spisokBankov(this.props.state.coursesBanksArray[7])
              : this.spisokBankov(this.props.state.coursesBanksArray[6]);
          default:
        }
        break;
      case "chf":
        switch (item.kodval) {
          case "byn":
            return item.kodpara.split("_")[2] === "buy"
              ? this.spisokBankov(this.props.state.coursesBanksArray[9])
              : this.spisokBankov(this.props.state.coursesBanksArray[8]);
          default:
        }
        break;
      case "rub":
        switch (item.kodval) {
          case "byn":
            return item.kodpara.split("_")[2] === "buy"
              ? this.spisokBankov(this.props.state.coursesBanksArray[11])
              : this.spisokBankov(this.props.state.coursesBanksArray[10]);
          case "usd":
            return item.kodpara.split("_")[2] === "buy"
              ? this.spisokBankov(this.props.state.coursesBanksArray[27])
              : this.spisokBankov(this.props.state.coursesBanksArray[26]);
          case "eur":
            return item.kodpara.split("_")[2] === "buy"
              ? this.spisokBankov(this.props.state.coursesBanksArray[25])
              : this.spisokBankov(this.props.state.coursesBanksArray[24]);
          default:
        }
        break;
      case "uah":
        switch (item.kodval) {
          case "byn":
            return item.kodpara.split("_")[2] === "buy"
              ? this.spisokBankov(this.props.state.coursesBanksArray[13])
              : this.spisokBankov(this.props.state.coursesBanksArray[12]);
          default:
        }
        break;
      case "pln":
        switch (item.kodval) {
          case "byn":
            return item.kodpara.split("_")[2] === "buy"
              ? this.spisokBankov(this.props.state.coursesBanksArray[15])
              : this.spisokBankov(this.props.state.coursesBanksArray[14]);
          default:
        }
        break;
      case "czk":
        switch (item.kodval) {
          case "byn":
            return item.kodpara.split("_")[2] === "buy"
              ? this.spisokBankov(this.props.state.coursesBanksArray[17])
              : this.spisokBankov(this.props.state.coursesBanksArray[16]);
          default:
        }
        break;
      case "kzt":
        switch (item.kodval) {
          case "byn":
            return item.kodpara.split("_")[2] === "buy"
              ? this.spisokBankov(this.props.state.coursesBanksArray[19])
              : this.spisokBankov(this.props.state.coursesBanksArray[18]);
          default:
        }
        break;
      case "cny":
        switch (item.kodval) {
          case "byn":
            return item.kodpara.split("_")[2] === "buy"
              ? this.spisokBankov(this.props.state.coursesBanksArray[21])
              : this.spisokBankov(this.props.state.coursesBanksArray[20]);
          default:
        }
        break;
      default:
    }
  };

  spisokBankov = item1 => {
    return (
      <div
        className="banks-text"
        onClick={this.onClikSpisokBankov}
        data-value={item1.kodpara}
      >
        <ul className="ul-desktop">
          {" "}
          {sortingListBanks(item1.banks).map(item => {
            return (
              <li key={item}>
                <Link
                  to={
                    this.props.state.buyStatus === "buy"
                      ? `/buy/${this.props.state.amountCurrency}${
                          this.props.state.activeCurrencyCode
                        }-${
                          this.props.state.activeCurrencyCode ===
                          item1.kodpara.split("_")[0]
                            ? item1.kodpara.split("_")[1]
                            : item1.kodpara.split("_")[0]
                        }`
                      : `/sell/${this.props.state.amountCurrency}${
                          this.props.state.activeCurrencyCode
                        }-${
                          this.props.state.activeCurrencyCode ===
                          item1.kodpara.split("_")[0]
                            ? item1.kodpara.split("_")[1]
                            : item1.kodpara.split("_")[0]
                        }`
                  }
                >
                  {this.props.state.banksNameBel[item]}{" "}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="ul-smart">
          {
            <li key={sortingListBanks(item1.banks)[0]}>
              <Link
                to={
                  this.props.state.buyStatus === "buy"
                    ? `/buy/${this.props.state.amountCurrency}${
                        this.props.state.activeCurrencyCode
                      }-${
                        this.props.state.activeCurrencyCode ===
                        item1.kodpara.split("_")[0]
                          ? item1.kodpara.split("_")[1]
                          : item1.kodpara.split("_")[0]
                      }`
                    : `/sell/${this.props.state.amountCurrency}${
                        this.props.state.activeCurrencyCode
                      }-${
                        this.props.state.activeCurrencyCode ===
                        item1.kodpara.split("_")[0]
                          ? item1.kodpara.split("_")[1]
                          : item1.kodpara.split("_")[0]
                      }`
                }
              >
                {
                  this.props.state.banksNameBel[
                    sortingListBanks(item1.banks)[0]
                  ]
                }{" "}
              </Link>
              <img src={uk} alt="logo" className="logoHeader" />
            </li>
          }
        </ul>
      </div>
    );
  };

  onClikSpisokBankov = e => {
    this.props.state.handleActiveParBanksST(e.currentTarget.dataset.value);
  };

  handleSetQntMnl = e => {
    this.props.state.handleSetQntST(e.currentTarget.value);
  };

  clickFlagFocusInput = e => {
    var setfcs = document.getElementById(e.currentTarget.dataset.value);
    this.props.filter !== e.currentTarget.dataset.value
      ? setfcs.focus()
      : this.zaglushka();

    this.props.filter !== e.currentTarget.dataset.value
      ? this.handleFilterChage(e)
      : this.zaglushka();
  };

  zaglushka = () => {};

  render() {
    const {
      coursesBanksArray,
      activeCurrencyCode,
      buyStatus
    } = this.props.state;
    return (
      <div className="conteiner-body-main">
        <div className="text">
          <p>
            Лепшы курс каб{" "}
            {
              this.props.state.firstScreenCN[
                `${this.props.state.activeCurrencyCode}_${
                  this.props.state.buyStatus
                }`
              ]
            }{" "}
            ў Мінску
          </p>
        </div>
        <div className="conteiner-flex">
          {coursesBanksArray.map(item => {
            return item.name !== "" &&
              ((activeCurrencyCode === item.kodval &&
                buyStatus === item.kodpara.split("_")[2]) ||
                (activeCurrencyCode !== item.kodval &&
                  buyStatus !== item.kodpara.split("_")[2]))
              ? this.vivodpari(item)
              : "";

            // if (
            //   activeCurrencyCode === item.kodval &&
            //   buyStatus === item.kodpara.split("_")[2]
            // ) {
            //   return this.vivodpari(item);
            // }

            // if (
            //   activeCurrencyCode !== item.kodval &&
            //   buyStatus !== item.kodpara.split("_")[2]
            // ) {
            //   return this.vivodpari(item);
            // }

            // if (
            //   item.name !== "" &&
            //   ((activeCurrencyCode === item.kodval &&
            //     buyStatus === item.kodpara.split("_")[2]) ||
            //     (activeCurrencyCode !== item.kodval &&
            //       buyStatus !== item.kodpara.split("_")[2]))
            // ) {
            //   return this.vivodpari(item);
            // }
          })}
        </div>
      </div>
    );
  }
}
export default FirstScreen;

import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";
import { dataApi } from "./data/dataAppp";
import { firstScreenCN } from "./data/firstScreenСurrencyName";
import { secondScreenCNActiv } from "./data/secondScreenСurrencyNameActive";
import { banksNameBel } from "./data/banksNameBel";
import { banksLogoImg } from "./data/banksLogoImg";
import SecondScreenBuy from "./SecondScreenBuy";
import SecondScreenSell from "./SecondScreenSell";
import FirstScreen from "./FirstScreen";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeCurrencyCode: "byn",
      amountCurrency: 2.058,
      activPriceBuy: 1,
      buyStatus: "sell",
      viewBankList: false,
      activePareBanks: "eur_byn_buy",
      coursesBanksArray: dataApi,
      firstScreenCN: firstScreenCN,
      secondScreenCNActiv: secondScreenCNActiv,
      banksNameBel: banksNameBel,
      banksLogoImg: banksLogoImg,
      mapStatusScnScr: false,
      changeMapStatusScnScrST: () => this.changeMapStatusScnScr(),
      handleActivPriceST: price => this.handleActivPrice(price),
      izmststST: () => this.izmstst(),
      handleSetQntST: qnt => this.handleSetQnt(qnt),
      changeFilterST: filter => this.changeFilter(filter),
      changeToggleST: ClsBtn => this.changeToggle(ClsBtn),
      handleActiveParBanksST: para => this.handleActiveParBanks(para)
    };

    this.state.amountCurrency = this.state.coursesBanksArray[2].price.toFixed(
      2
    );

    // this.state.activPriceBuy = this.state.coursesBanksArray[3].price;
  }

  handleActivPrice = price => {
    this.setState({
      activPriceBuy: price
    });
  };

  izmstst = () => {
    if (this.state.buyStatus === "buy") {
      this.setState({
        buyStatus: "sell"
      });
    } else {
      this.setState({
        buyStatus: "buy"
      });
    }
  };

  changeMapStatusScnScr = () => {
    this.setState({
      mapStatusScnScr: !this.state.mapStatusScnScr
    });
  };

  handleActiveParBanks = para => {
    this.setState({
      activePareBanks: para
    });
  };

  handleSetQnt = qnt => {
    this.setState({
      amountCurrency: qnt
    });
  };

  changeFilter = filtrValue => {
    this.setState({
      activeCurrencyCode: filtrValue
    });
  };

  changeToggle = classBtn => {
    if (classBtn === "switch-btn switch-on") {
      this.setState({
        buyStatus: "sell"
      });
    } else {
      this.setState({
        buyStatus: "buy"
      });
    }
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => <FirstScreen {...props} state={this.state} />}
        />
        <Route
          path="/buy"
          render={props => <SecondScreenBuy {...props} state={this.state} />}
        />
        <Route
          path="/sell"
          render={props => <SecondScreenSell {...props} state={this.state} />}
        />
      </Switch>
    );
  }
}
export default App;

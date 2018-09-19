import React, { Component } from "react";

import arrowLeft from "./arrowLeft.svg";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import calculationPairRate from "./components/calculationPairRate";
import sortingListBanks from "./components/sortingListBanks";
import { Link } from "react-router-dom";

class SecondScreen extends Component {
  handleFocus = event => {
    event.target.select();
  };

  // complete;
  // componentDidMount = () => {
  //   var inputfocus = ReactDOM.findDOMNode(this.refs.byn);
  //   inputfocus.focus();
  // };
  secondScreen = () => {
    switch (this.props.state.activeCurrencyCode) {
      case "byn":
        switch (this.props.state.activePareBanks) {
          case "usd_byn_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[3],
              this.props.state.coursesBanksArray[3],
              this.props.state
            );
          case "eur_byn_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[5],
              this.props.state.coursesBanksArray[5],
              this.props.state
            );
          case "gbp_byn_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[7],
              this.props.state.coursesBanksArray[7],
              this.props.state
            );
          case "chf_byn_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[9],
              this.props.state.coursesBanksArray[9],
              this.props.state
            );
          case "rub_byn_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[11],
              this.props.state.coursesBanksArray[11],
              this.props.state
            );
          case "uah_byn_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[13],
              this.props.state.coursesBanksArray[13],
              this.props.state
            );
          case "pln_byn_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[15],
              this.props.state.coursesBanksArray[15],
              this.props.state
            );
          case "czk_byn_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[17],
              this.props.state.coursesBanksArray[17],
              this.props.state
            );
          case "kzt_byn_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[19],
              this.props.state.coursesBanksArray[19],
              this.props.state
            );
          case "cny_byn_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[21],
              this.props.state.coursesBanksArray[21],
              this.props.state
            );

          case "usd_byn_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[2],
              this.props.state.coursesBanksArray[2],
              this.props.state
            );
          case "eur_byn_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[4],
              this.props.state.coursesBanksArray[4],
              this.props.state
            );
          case "gbp_byn_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[6],
              this.props.state.coursesBanksArray[6],
              this.props.state
            );
          case "chf_byn_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[8],
              this.props.state.coursesBanksArray[8],
              this.props.state
            );
          case "rub_byn_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[10],
              this.props.state.coursesBanksArray[10],
              this.props.state
            );
          case "uah_byn_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[12],
              this.props.state.coursesBanksArray[12],
              this.props.state
            );
          case "pln_byn_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[14],
              this.props.state.coursesBanksArray[14],
              this.props.state
            );
          case "czk_byn_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[16],
              this.props.state.coursesBanksArray[16],
              this.props.state
            );
          case "kzt_byn_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[18],
              this.props.state.coursesBanksArray[18],
              this.props.state
            );
          case "cny_byn_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[20],
              this.props.state.coursesBanksArray[20],
              this.props.state
            );
          default:
        }
        break;

      case "usd":
        switch (this.props.state.activePareBanks) {
          case "usd_byn_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[2],
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[3],
              this.props.state
            );
          case "eur_usd_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[2],
              this.props.state.coursesBanksArray[4],
              this.props.state.coursesBanksArray[23],
              this.props.state
            );
          case "usd_rub_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[2],
              this.props.state.coursesBanksArray[10],
              this.props.state.coursesBanksArray[27],
              this.props.state
            );

          case "usd_byn_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[3],
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[2],
              this.props.state
            );
          case "eur_usd_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[3],
              this.props.state.coursesBanksArray[5],
              this.props.state.coursesBanksArray[22],
              this.props.state
            );
          case "usd_rub_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[3],
              this.props.state.coursesBanksArray[11],
              this.props.state.coursesBanksArray[26],
              this.props.state
            );
          default:
        }
        break;

      case "eur":
        switch (this.props.state.activePareBanks) {
          case "eur_byn_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[4],
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[5],
              this.props.state
            );
          case "eur_usd_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[4],
              this.props.state.coursesBanksArray[2],
              this.props.state.coursesBanksArray[23],
              this.props.state
            );
          case "eur_rub_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[4],
              this.props.state.coursesBanksArray[10],
              this.props.state.coursesBanksArray[25],
              this.props.state
            );

          case "eur_byn_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[5],
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[4],
              this.props.state
            );
          case "eur_usd_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[5],
              this.props.state.coursesBanksArray[3],
              this.props.state.coursesBanksArray[22],
              this.props.state
            );
          case "eur_rub_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[5],
              this.props.state.coursesBanksArray[11],
              this.props.state.coursesBanksArray[24],
              this.props.state
            );
          default:
        }
        break;

      case "gbp":
        switch (this.props.state.activePareBanks) {
          case "gbp_byn_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[6],
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[7],
              this.props.state
            );

          case "gbp_byn_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[7],
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[6],
              this.props.state
            );
          default:
        }
        break;

      case "chf":
        switch (this.props.state.activePareBanks) {
          case "chf_byn_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[8],
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[9],
              this.props.state
            );

          case "chf_byn_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[9],
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[8],
              this.props.state
            );
          default:
        }
        break;

      case "rub":
        switch (this.props.state.activePareBanks) {
          case "rub_byn_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[10],
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[11],
              this.props.state
            );
          case "usd_rub_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[10],
              this.props.state.coursesBanksArray[2],
              this.props.state.coursesBanksArray[27],
              this.props.state
            );
          case "eur_rub_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[10],
              this.props.state.coursesBanksArray[4],
              this.props.state.coursesBanksArray[25],
              this.props.state
            );

          case "rub_byn_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[11],
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[10],
              this.props.state
            );
          case "usd_rub_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[11],
              this.props.state.coursesBanksArray[3],
              this.props.state.coursesBanksArray[26],
              this.props.state
            );
          case "eur_rub_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[11],
              this.props.state.coursesBanksArray[5],
              this.props.state.coursesBanksArray[24],
              this.props.state
            );
          default:
        }
        break;

      case "uah":
        switch (this.props.state.activePareBanks) {
          case "uah_byn_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[12],
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[13],
              this.props.state
            );

          case "uah_byn_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[13],
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[12],
              this.props.state
            );
          default:
        }
        break;

      case "pln":
        switch (this.props.state.activePareBanks) {
          case "pln_byn_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[14],
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[15],
              this.props.state
            );

          case "pln_byn_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[15],
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[14],
              this.props.state
            );
          default:
        }
        break;

      case "czk":
        switch (this.props.state.activePareBanks) {
          case "czk_byn_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[16],
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[16],
              this.props.state
            );

          case "czk_byn_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[17],
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[17],
              this.props.state
            );
          default:
        }
        break;

      case "kzt":
        switch (this.props.state.activePareBanks) {
          case "kzt_byn_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[18],
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[19],
              this.props.state
            );

          case "kzt_byn_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[19],
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[18],
              this.props.state
            );
          default:
        }
        break;

      case "cny":
        switch (this.props.state.activePareBanks) {
          case "cny_byn_sell":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[20],
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[21],
              this.props.state
            );

          case "cny_byn_buy":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[21],
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[20],
              this.props.state
            );
          default:
        }
        break;

      default:
    }
  };

  secondScreenHtml = (item1, item2, bankiSecond, propss) => {
    let size1 = {
      width: `${calculationPairRate(item1, propss).length * 14 || 3 * 14}px`
    };
    let size2 = {
      width: `${calculationPairRate(item2, propss).length * 14 || 3 * 14}px`
    };
    const mapState = { center: [53.902496, 27.561481], zoom: 13, controls: [] };

    const screenWidth = +window.innerWidth;

    return (
      <div className="conteiner-second-grid">
        <div className="column1">
          <div className="column1-child">
            <div className="buttonBanks" onClick={propss.perehodBanks}>
              <Link to={`/`}>
                <img src={arrowLeft} alt="" /> Усе валюты
              </Link>
            </div>
            <div className="text-second">
              Дзе {this.props.state.buyStatus === "buy" ? "набыць" : "абмяняць"}{" "}
              {
                this.props.state.secondScreenCNActiv[
                  this.props.state.activeCurrencyCode
                ]
              }{" "}
              {this.props.state.buyStatus === "buy" ? "за" : "на"}{" "}
              {
                this.props.state.secondScreenCNActiv[
                  this.props.state.activePareBanks.split("_")[0] ===
                  this.props.state.activeCurrencyCode
                    ? this.props.state.activePareBanks.split("_")[1]
                    : this.props.state.activePareBanks.split("_")[0]
                ]
              }{" "}
              па лепшым курсе
            </div>
            <div className="conteiner-second">
              <div
                className={
                  propss.filter === item1.kodval
                    ? "block-curces active"
                    : "block-curces"
                }
                key={item1.id}
              >
                <div className="input-block">
                  <input
                    type="text"
                    style={size1}
                    value={calculationPairRate(item1, propss)}
                    id={item1.kodval}
                    onChange={this.handleSetQntMnl}
                    key={item1.id}
                    data-value={item1.kodval}
                    data={item1.price}
                    onClick={
                      propss.filter !== item1.kodval
                        ? this.handleFilterChage
                        : this.zaglushka
                    }
                    name={item1.id}
                    ref={item1.kodval}
                    onFocus={this.handleFocus}
                  />
                </div>

                <div className="img-flags-block">
                  <img
                    src={"/flags/" + item1.kodval + ".png"}
                    className="rounded float-right"
                    alt={item1.name}
                    title={item1.name}
                    data={item1.price}
                    data-value={item1.kodval}
                    onClick={this.clickFlagFocusInput}
                  />
                </div>
              </div>

              <span className="span-second-center">=</span>

              <div className="block-curces" key={item2.id}>
                <div className="input-block">
                  <input
                    type="text"
                    style={size2}
                    value={calculationPairRate(item2, propss)}
                    id={item2.kodval}
                    onChange={this.handleSetKolvo1}
                    key={item2.id}
                    data-value={item2.kodval}
                    data={item2.price}
                    onClick={this.zaglushka}
                    name={item2.id}
                    ref={item2.kodval}
                    onFocus={this.handleFocus}
                    disabled
                  />
                </div>

                <div className="img-flags-block">
                  <img
                    src={"/flags/" + item2.kodval + ".png"}
                    className="rounded float-right"
                    alt={item2.name}
                    title={item2.name}
                    data={item2.price}
                    data-value={item2.kodval}
                    //onClick={this.clickFlagFocusInput}
                  />
                </div>
              </div>
            </div>

            <div className="toggle-second">
              {this.toggleSecScr(propss.mapStatusScnScr)}
            </div>

            <ul className="ul-second">
              {!propss.mapStatusScnScr
                ? this.displayBanksSecondScreen(bankiSecond.banks)
                : ""}
            </ul>
          </div>
        </div>
        <section className="column2" id="conteiner-map">
          {screenWidth > 480
            ? this.MyPlacemark(mapState)
            : propss.mapStatusScnScr
              ? this.MyPlacemark(mapState)
              : ""}
        </section>
      </div>
    );
  };
  handleSetQntMnl = e => {
    this.props.state.handleSetQntST(e.currentTarget.value);
  };

  toggleSecScr = mapStatus => {
    return (
      <div className="toggle-text-second">
        <div
          className={
            mapStatus
              ? "switch-btn-second switch-on-second"
              : "switch-btn-second"
          }
          onClick={this.props.state.changeMapStatusScnScrST}
          //data-value={item.kodval}
        >
          <span className="span1">Спісам</span>
          <span className="span2">На мапе</span>
        </div>
      </div>
    );
  };

  MyPlacemark = mapState => (
    <YMaps>
      <Map state={mapState} width="100%" height="100%">
        <Placemark
          geometry={{
            coordinates: [55.751574, 37.573856]
          }}
          properties={{
            hintContent: "Собственный значок метки",
            balloonContent: "Это красивая метка"
          }}
          options={{
            iconLayout: "default#image",
            iconImageHref: "images/myIcon.gif",
            iconImageSize: [30, 42],
            iconImageOffset: [-3, -42]
          }}
        />
      </Map>
    </YMaps>
  );

  displayBanksSecondScreen = bank => {
    return sortingListBanks(bank).map(banki => {
      return (
        <li key={banki}>
          <img
            src={"/bankslogo/" + this.props.state.banksLogoImg[banki]}
            alt=""
            height="16"
            width="16"
          />
          {this.props.state.banksNameBel[banki]}

          <ul>
            {bank.map(item => {
              if (banki === item.split(":")[0])
                return (
                  <li key={item.split(":")[2]}>
                    {item.split(":")[4].split("к,")[1]}
                  </li>
                );
            })}
          </ul>
        </li>
      );
    });
  };

  render() {
    return <div>{this.secondScreen()}</div>;
  }
}
export default SecondScreen;

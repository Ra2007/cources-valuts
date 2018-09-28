import React, { Component } from "react";

import arrowLeft from "./arrowLeft.svg";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import calculationPairRate from "./components/calculationPairRate";
import sortingListBanks from "./components/sortingListBanks";
import { Link } from "react-router-dom";

class SecondScreenSell extends Component {
  constructor() {
    super();

    this.state = {
      valuta1: "",
      valuta2: "",
      ontValSecScr: ""
    };
  }
  componentDidMount = () => {
    let valSecond = this.props.location.pathname
      .split("/")[2]
      .split("")
      .splice(
        this.props.location.pathname.split("/")[2].split("").length - 3,
        3
      )
      .join("");

    let valActive = this.props.location.pathname
      .split("/")[2]
      .split("")
      .splice(
        this.props.location.pathname.split("/")[2].split("").length - 7,
        3
      )
      .join("");

    let arrey = this.props.location.pathname.split("/")[2].split("");
    arrey.splice(arrey.length - 7, 7);
    let arrey2 = arrey.join("");

    this.setState({
      valuta1: valActive,
      valuta2: valSecond,
      ontValSecScr: arrey2
    });

    this.props.state.handleSetQntST(arrey2);
    this.props.state.changeFilterST(valActive);
  };
  handleFocus = event => {
    event.target.select();
  };

  secondScreenBuy = () => {
    switch (this.state.valuta1) {
      case "byn":
        switch (this.state.valuta2) {
          case "usd":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[2],
              this.props.state.coursesBanksArray[2],
              this.props.state
            );
          case "eur":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[4],
              this.props.state.coursesBanksArray[4],
              this.props.state
            );
          case "gbp":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[6],
              this.props.state.coursesBanksArray[6],
              this.props.state
            );
          case "chf":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[8],
              this.props.state.coursesBanksArray[8],
              this.props.state
            );
          case "rub":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[10],
              this.props.state.coursesBanksArray[10],
              this.props.state
            );
          case "uah":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[12],
              this.props.state.coursesBanksArray[12],
              this.props.state
            );
          case "pln":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[14],
              this.props.state.coursesBanksArray[14],
              this.props.state
            );
          case "czk":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[16],
              this.props.state.coursesBanksArray[16],
              this.props.state
            );
          case "kzt":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[1],
              this.props.state.coursesBanksArray[18],
              this.props.state.coursesBanksArray[18],
              this.props.state
            );
          case "cny":
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
        switch (this.state.valuta2) {
          case "byn":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[3],
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[3],
              this.props.state
            );
          case "eur":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[3],
              this.props.state.coursesBanksArray[4],
              this.props.state.coursesBanksArray[23],
              this.props.state
            );
          case "rub":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[3],
              this.props.state.coursesBanksArray[10],
              this.props.state.coursesBanksArray[27],
              this.props.state
            );

          default:
        }
        break;

      case "eur":
        switch (this.state.valuta2) {
          case "byn":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[5],
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[5],
              this.props.state
            );
          case "usd":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[5],
              this.props.state.coursesBanksArray[2],
              this.props.state.coursesBanksArray[23],
              this.props.state
            );
          case "rub":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[5],
              this.props.state.coursesBanksArray[10],
              this.props.state.coursesBanksArray[25],
              this.props.state
            );

          default:
        }
        break;

      case "gbp":
        switch (this.state.valuta2) {
          case "byn":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[7],
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[7],
              this.props.state
            );

          default:
        }
        break;

      case "chf":
        switch (this.state.valuta2) {
          case "byn":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[9],
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[9],
              this.props.state
            );

          default:
        }
        break;

      case "rub":
        switch (this.state.valuta2) {
          case "byn":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[11],
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[11],
              this.props.state
            );
          case "usd":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[11],
              this.props.state.coursesBanksArray[2],
              this.props.state.coursesBanksArray[27],
              this.props.state
            );
          case "eur":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[11],
              this.props.state.coursesBanksArray[4],
              this.props.state.coursesBanksArray[25],
              this.props.state
            );

          default:
        }
        break;

      case "uah":
        switch (this.state.valuta2) {
          case "byn":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[13],
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[13],
              this.props.state
            );

          default:
        }
        break;

      case "pln":
        switch (this.state.valuta2) {
          case "byn":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[15],
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[15],
              this.props.state
            );

          default:
        }
        break;

      case "czk":
        switch (this.state.valuta2) {
          case "byn":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[17],
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[17],
              this.props.state
            );

          default:
        }
        break;

      case "kzt":
        switch (this.state.valuta2) {
          case "byn":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[19],
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[19],
              this.props.state
            );

          default:
        }
        break;

      case "cny":
        switch (this.state.valuta2) {
          case "byn":
            return this.secondScreenHtml(
              this.props.state.coursesBanksArray[21],
              this.props.state.coursesBanksArray[0],
              this.props.state.coursesBanksArray[21],
              this.props.state
            );

          default:
        }
        break;

      default:
    }
  };

  handleFilterChage = e => {
    const valact11 = e.currentTarget.dataset.value;
    this.props.state.handleActivPriceST(Object.values(e.currentTarget)[1].data);
    this.props.state.handleSetQntST(document.getElementById(valact11).value);
    this.props.state.changeFilterST(e.currentTarget.dataset.value);
    this.props.state.izmststST();
  };

  secondScreenHtml = (item1, item2, bankiSecond, propss) => {
    const { valuta1, valuta2 } = this.state;

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
              Дзе абмяняць{" "}
              {/* {this.props.state.buyStatus === "buy" ? "набыць" : "абмяняць"}{" "} */}
              {this.props.state.secondScreenCNActiv[valuta1]} на{" "}
              {/* {this.props.state.buyStatus === "buy" ? "за" : "на"}{" "} */}
              {this.props.state.secondScreenCNActiv[valuta2]} па лепшым курсе
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
                    onChange={this.handleSetQntMnl}
                    onClick={
                      propss.filter !== item1.kodval
                        ? this.handleFilterChage
                        : this.zaglushka
                    }
                    key={item2.id}
                    data-value={item2.kodval}
                    data={item2.price}
                    name={item2.id}
                    onFocus={this.handleFocus}
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
    return <div>{this.secondScreenBuy()}</div>;
  }
}
export default SecondScreenSell;

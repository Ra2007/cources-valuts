import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import calculationPairRate from "./calculationPairRate";
import sortingListBanks from "./sortingListBanks";

const secondScreenHtml = (item1, item2, bankiSecond, propss) => {
  console.log("vivodToo", item2);

  let size1 = {
    width: `${calculationPairRate(item1, propss).length * 14 || 3 * 14}px`
  };
  let size2 = {
    width: `${calculationPairRate(item2, propss).length * 14 || 3 * 14}px`
  };
  const mapState = { center: [53.902496, 27.561481], zoom: 13 };

  const MyPlacemark = () => (
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

  const displayBanksSecondScreen = bank => {
    console.log(bank);
    return sortingListBanks(bank).map(banki => {
      return (
        <li key={banki}>
          {banki}
          <ul>
            {bank.map(item => {
              if (banki == item.split(":")[1])
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

  return (
    <div className="conteiner-second-grid">
      <div className="column1">
        <div className="buttonBanks" onClick={propss.perehodBanks}>
          {" "}
          back{" "}
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
                onChange={this.handleSetKolvo1}
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

          <span>=</span>

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

        <ul>{displayBanksSecondScreen(bankiSecond.banks)}</ul>
      </div>

      <div className="column2" id="conteiner-map">
        {MyPlacemark()}
      </div>
    </div>
  );
};

export default secondScreenHtml;

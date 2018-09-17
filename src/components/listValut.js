import React, { Component } from "react";
import ReactDOM from "react-dom";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import uk from "./picture.svg";
import arrowLeft from "./arrowLeft.svg";
// import sortingListBanks from "./sortingListBanks";

// import calculationPairRate from "./calculationPairRate";

class ListValut extends Component {
  // handleFocus = event => {
  //   event.target.select();
  // };

  // componentDidMount = () => {
  //   //ставим фокус в input byn
  //   var inputfocus = ReactDOM.findDOMNode(this.refs.byn);
  //   inputfocus.focus();
  // };

  // handleFilterChage = e => {
  //   const valact11 = e.currentTarget.dataset.value;
  //   this.props.handleActivPrice(Object.values(e.currentTarget)[1].data);
  //   this.props.handleSetKolvo(document.getElementById(valact11).value);
  //   this.props.onFilterChanged(e.currentTarget.dataset.value);
  //   this.props.izmstst();
  // };

  // handleSetKolvo1 = e => {
  //   this.props.handleSetKolvo(e.currentTarget.value);
  // };

  izmenenieKP = e => {
    const valact = e.currentTarget.dataset.value;
    this.props.handleSetKolvo(document.getElementById(valact).value);
    this.props.izmenenieKParrent(e.currentTarget.className);
  };

  // zaglushka = () => {};

  // toggle = item => {
  //   return (
  //     <div className="toggle-text">
  //       <div
  //         className={
  //           item.kodpara.split("_")[2] === "buy"
  //             ? "switch-btn switch-on"
  //             : "switch-btn"
  //         }
  //         onClick={this.izmenenieKP}
  //         data-value={item.kodval}
  //       >
  //         <span>
  //           {item.kodpara.split("_")[2] === "sell" ? "абмяняць" : "набыць"}
  //         </span>
  //       </div>
  //     </div>
  //   );
  // };

  // onClikSpisokBankov = e => {
  //   console.log(document.getElementsByClassName("block-curces"));
  //   this.props.handleActiveParBanks(e.currentTarget.dataset.value);
  //   this.props.perehodBanks();
  // };

  // spisokBankov = item => {
  //   return (
  //     <div
  //       className="banks-text"
  //       onClick={this.onClikSpisokBankov}
  //       data-value={item.kodpara}
  //     >
  //       <ul className="ul-desktop">
  //         {" "}
  //         {console.log("spisok bankovitem", item)}
  //         {sortingListBanks(item.banks).map(item => {
  //           return (
  //             <li key={item}>
  //               <a href="#">{item}</a>
  //             </li>
  //           );
  //         })}
  //       </ul>

  //       <ul className="ul-smart">
  //         {
  //           <li key={sortingListBanks(item.banks)[0]}>
  //             <a href="#">{sortingListBanks(item.banks)[0]} </a>{" "}
  //             <img src={uk} alt="logo" className="logoHeader" />
  //           </li>
  //         }
  //       </ul>
  //     </div>
  //   );
  // };

  // viewerBanks = item => {
  //   switch (this.props.filter) {
  //     case "byn":
  //       return this.spisokBankov(item);

  //     case "usd":
  //       switch (item.kodval) {
  //         case "byn":
  //           return item.kodpara.split("_")[2] === "buy"
  //             ? this.spisokBankov(this.props.kursibanki[3])
  //             : this.spisokBankov(this.props.kursibanki[2]);
  //         case "eur":
  //           return item.kodpara.split("_")[2] === "buy"
  //             ? this.spisokBankov(this.props.kursibanki[23])
  //             : this.spisokBankov(this.props.kursibanki[22]);
  //         case "rub":
  //           return item.kodpara.split("_")[2] === "buy"
  //             ? this.spisokBankov(this.props.kursibanki[27])
  //             : this.spisokBankov(this.props.kursibanki[26]);
  //         default:
  //       }
  //       break;
  //     case "eur":
  //       switch (item.kodval) {
  //         case "byn":
  //           return item.kodpara.split("_")[2] === "buy"
  //             ? this.spisokBankov(this.props.kursibanki[5])
  //             : this.spisokBankov(this.props.kursibanki[4]);
  //         case "usd":
  //           return item.kodpara.split("_")[2] === "buy"
  //             ? this.spisokBankov(this.props.kursibanki[23])
  //             : this.spisokBankov(this.props.kursibanki[22]);
  //         case "rub":
  //           return item.kodpara.split("_")[2] === "buy"
  //             ? this.spisokBankov(this.props.kursibanki[25])
  //             : this.spisokBankov(this.props.kursibanki[24]);
  //         default:
  //       }
  //       break;
  //     case "gbp":
  //       switch (item.kodval) {
  //         case "byn":
  //           return item.kodpara.split("_")[2] === "buy"
  //             ? this.spisokBankov(this.props.kursibanki[7])
  //             : this.spisokBankov(this.props.kursibanki[6]);
  //         default:
  //       }
  //       break;
  //     case "chf":
  //       switch (item.kodval) {
  //         case "byn":
  //           return item.kodpara.split("_")[2] === "buy"
  //             ? this.spisokBankov(this.props.kursibanki[9])
  //             : this.spisokBankov(this.props.kursibanki[8]);
  //         default:
  //       }
  //       break;
  //     case "rub":
  //       switch (item.kodval) {
  //         case "byn":
  //           return item.kodpara.split("_")[2] === "buy"
  //             ? this.spisokBankov(this.props.kursibanki[11])
  //             : this.spisokBankov(this.props.kursibanki[10]);
  //         case "usd":
  //           return item.kodpara.split("_")[2] === "buy"
  //             ? this.spisokBankov(this.props.kursibanki[27])
  //             : this.spisokBankov(this.props.kursibanki[26]);
  //         case "eur":
  //           return item.kodpara.split("_")[2] === "buy"
  //             ? this.spisokBankov(this.props.kursibanki[25])
  //             : this.spisokBankov(this.props.kursibanki[24]);
  //         default:
  //       }
  //       break;
  //     case "uah":
  //       switch (item.kodval) {
  //         case "byn":
  //           return item.kodpara.split("_")[2] === "buy"
  //             ? this.spisokBankov(this.props.kursibanki[13])
  //             : this.spisokBankov(this.props.kursibanki[12]);
  //         default:
  //       }
  //       break;
  //     case "pln":
  //       switch (item.kodval) {
  //         case "byn":
  //           return item.kodpara.split("_")[2] === "buy"
  //             ? this.spisokBankov(this.props.kursibanki[15])
  //             : this.spisokBankov(this.props.kursibanki[14]);
  //         default:
  //       }
  //       break;
  //     case "czk":
  //       switch (item.kodval) {
  //         case "byn":
  //           return item.kodpara.split("_")[2] === "buy"
  //             ? this.spisokBankov(this.props.kursibanki[17])
  //             : this.spisokBankov(this.props.kursibanki[16]);
  //         default:
  //       }
  //       break;
  //     case "kzt":
  //       switch (item.kodval) {
  //         case "byn":
  //           return item.kodpara.split("_")[2] === "buy"
  //             ? this.spisokBankov(this.props.kursibanki[19])
  //             : this.spisokBankov(this.props.kursibanki[18]);
  //         default:
  //       }
  //       break;
  //     case "cny":
  //       switch (item.kodval) {
  //         case "byn":
  //           return item.kodpara.split("_")[2] === "buy"
  //             ? this.spisokBankov(this.props.kursibanki[21])
  //             : this.spisokBankov(this.props.kursibanki[20]);
  //         default:
  //       }
  //       break;
  //     default:
  //   }
  // };

  // clickFlagFocusInput = e => {
  //   var setfcs = document.getElementById(e.currentTarget.dataset.value);
  //   this.props.filter !== e.currentTarget.dataset.value
  //     ? setfcs.focus()
  //     : this.zaglushka();

  //   this.props.filter !== e.currentTarget.dataset.value
  //     ? this.handleFilterChage(e)
  //     : this.zaglushka();
  // };

  // vivodpari = item => {
  //   let size = {
  //     width: `${calculationPairRate(item, this.props).length * 14 || 3 * 14}px`
  //   };

  //   return (
  //     <div
  //       className={
  //         this.props.filter === item.kodval
  //           ? "block-curces active"
  //           : "block-curces"
  //       }
  //       key={item.id}
  //     >
  //       <div className="input-block">
  //         <input
  //           type="text"
  //           //  size={this.raschetprice(item).length-1 || 3}
  //           style={size}
  //           value={calculationPairRate(item, this.props)}
  //           id={item.kodval}
  //           onChange={this.handleSetKolvo1}
  //           key={item.id}
  //           data-value={item.kodval}
  //           data={item.price}
  //           onClick={
  //             this.props.filter !== item.kodval
  //               ? this.handleFilterChage
  //               : this.zaglushka
  //           }
  //           name={item.id}
  //           ref={item.kodval}
  //           onFocus={this.handleFocus}
  //         />
  //       </div>

  //       <div className="img-flags-block">
  //         <img
  //           src={"/flags/" + item.kodval + ".png"}
  //           className="rounded float-right"
  //           alt={item.name}
  //           title={item.name}
  //           data={item.price}
  //           data-value={item.kodval}
  //           onClick={this.clickFlagFocusInput}
  //         />
  //       </div>

  //       <div className="bottom-content-block">
  //         {this.props.filter === item.kodval
  //           ? this.toggle(item)
  //           : this.viewerBanks(item)}
  //       </div>
  //     </div>
  //   );
  // };

  // displayBanksSecondScreen = bank => {
  //   console.log(bank);
  //   return sortingListBanks(bank).map(banki => {
  //     return (
  //       <li key={banki}>
  //         {banki}
  //         <ul>
  //           {bank.map(item => {
  //             if (banki == item.split(":")[1])
  //               return (
  //                 <li key={item.split(":")[2]}>
  //                   {item.split(":")[4].split("к,")[1]}
  //                 </li>
  //               );
  //           })}
  //         </ul>
  //       </li>
  //     );
  //   });
  // };

  //     vivodTooStr = (item1, item2,bankiSecond) => {
  //         console.log('vivodToo', item2)

  //         let size1 = { width: `${this.raschetprice(item1).length * 14 || 3 * 14}px` }
  //         let size2 = { width: `${this.raschetprice(item2).length * 14 || 3 * 14}px` }
  //         const mapState = { center: [53.902496, 27.561481], zoom: 13,};

  //         const MyPlacemark = () => (
  //             <YMaps>
  //               <Map state={mapState} width="100%" height="100%">

  //                 <Placemark
  //                   geometry={{
  //                     coordinates: [55.751574, 37.573856]
  //                   }}
  //                   properties={{
  //                     hintContent: 'Собственный значок метки',
  //                     balloonContent: 'Это красивая метка'
  //                   }}
  //                   options={{
  //                     iconLayout: 'default#image',
  //                     iconImageHref: 'images/myIcon.gif',
  //                     iconImageSize: [30, 42],
  //                     iconImageOffset: [-3, -42]
  //                   }}
  //                 />

  //               </Map>
  //             </YMaps>
  //           );

  //         return (
  //         <div className="conteiner-second-grid">

  //             <div className="column1">

  // <div className="buttonBanks" onClick={this.props.perehodBanks} > back </div>
  // <div className="conteiner-second">

  // <div
  //     className={this.props.filter === item1.kodval ? 'block-curces active' : 'block-curces'}
  //     key={item1.id}
  // >

  //     <div className="input-block">
  //         <input
  //             type="text"
  //             style={size1}

  //             value={this.raschetprice(item1)}
  //             id={item1.kodval}
  //             onChange={this.handleSetKolvo1}
  //             key={item1.id}
  //             data-value={item1.kodval}
  //             data={item1.price}
  //             onClick={this.props.filter !== item1.kodval ? this.handleFilterChage : this.zaglushka}
  //             name={item1.id}
  //             ref={item1.kodval}
  //             onFocus={this.handleFocus}
  //         />
  //     </div>

  //     <div className="img-flags-block">
  //         <img
  //             src={'/flags/' + item1.kodval + '.png'}
  //             className="rounded float-right"
  //             alt={item1.name} title={item1.name}
  //             data={item1.price}
  //             data-value={item1.kodval}
  //             onClick={this.clickFlagFocusInput}

  //         />
  //     </div>
  // </div>

  // <span>=</span>

  // <div
  //     className="block-curces"
  //     key={item2.id}
  // >

  //     <div className="input-block">
  //         <input
  //             type="text"
  //             style={size2}

  //             value={this.raschetprice(item2)}
  //             id={item2.kodval}
  //             onChange={this.handleSetKolvo1}
  //             key={item2.id}
  //             data-value={item2.kodval}
  //             data={item2.price}
  //             onClick={this.zaglushka}
  //             name={item2.id}
  //             ref={item2.kodval}
  //             onFocus={this.handleFocus}
  //             disabled
  //         />
  //     </div>

  //     <div className="img-flags-block">
  //         <img
  //             src={'/flags/' + item2.kodval + '.png'}
  //             className="rounded float-right"
  //             alt={item2.name} title={item2.name}
  //             data={item2.price}
  //             data-value={item2.kodval}
  //             //onClick={this.clickFlagFocusInput}

  //         />
  //     </div>
  // </div>

  // </div>

  // <ul>
  //     {this.displayBanksSecondScreen(bankiSecond.banks)}
  // </ul>
  // </div>

  // <div className="column2" id="conteiner-map" >

  // {MyPlacemark()}

  // </div>

  //         </div>

  //         )

  //     }

  // raschetprice = (item) => {

  //     switch (this.props.filter) {
  //         case 'byn': return (this.props.filter === item.kodval ? this.props.kolichestvoValuti : (this.props.kolichestvoValuti / item.price).toFixed(2))

  //         case 'usd': switch (item.kodval) {

  //             case 'byn': return ((this.props.kolichestvoValuti * this.props.activPriceBuy).toFixed(2))
  //             case 'usd': return (this.props.kolichestvoValuti)
  //             case 'eur': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'gbp': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'chf': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'rub': return (item.kodpara.split('_')[2] === 'buy' ? (this.props.kolichestvoValuti * this.props.kursibanki[27].price).toFixed(2) : (this.props.kolichestvoValuti * this.props.kursibanki[26].price).toFixed(2))
  //             case 'uah': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'pln': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'czk': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'kzt': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'cny': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             default:
  //         }
  //             break;

  //         case 'eur': switch (item.kodval) {

  //             case 'byn': return ((this.props.kolichestvoValuti * this.props.activPriceBuy).toFixed(2))
  //             case 'usd': return (item.kodpara.split('_')[2] === 'buy' ? (this.props.kolichestvoValuti * this.props.kursibanki[23].price).toFixed(2) : (this.props.kolichestvoValuti * this.props.kursibanki[22].price).toFixed(2))
  //             case 'eur': return (this.props.kolichestvoValuti)
  //             case 'gbp': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'chf': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'rub': return (item.kodpara.split('_')[2] === 'buy' ? (this.props.kolichestvoValuti * this.props.kursibanki[25].price).toFixed(2) : (this.props.kolichestvoValuti * this.props.kursibanki[24].price).toFixed(2))
  //             case 'uah': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'pln': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'czk': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'kzt': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'cny': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             default:
  //         }
  //             break;

  //         case 'gbp': switch (item.kodval) {

  //             case 'byn': return ((this.props.kolichestvoValuti * this.props.activPriceBuy).toFixed(2))
  //             case 'usd': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'eur': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'gbp': return (this.props.kolichestvoValuti)
  //             case 'chf': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'rub': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'uah': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'pln': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'czk': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'kzt': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'cny': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             default:
  //         }
  //             break;

  //         case 'chf': switch (item.kodval) {

  //             case 'byn': return ((this.props.kolichestvoValuti * this.props.activPriceBuy).toFixed(2))
  //             case 'usd': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'eur': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'gbp': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'chf': return (this.props.kolichestvoValuti)
  //             case 'rub': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'uah': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'pln': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'czk': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'kzt': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'cny': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             default:
  //         }
  //             break;

  //         case 'rub': switch (item.kodval) {

  //             case 'byn': return ((this.props.kolichestvoValuti * this.props.activPriceBuy).toFixed(2))
  //             case 'usd': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'eur': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'gbp': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'chf': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'rub': return (this.props.kolichestvoValuti)
  //             case 'uah': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'pln': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'czk': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'kzt': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'cny': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             default:
  //         }
  //             break;

  //         case 'uah': switch (item.kodval) {

  //             case 'byn': return ((this.props.kolichestvoValuti * this.props.activPriceBuy).toFixed(2))
  //             case 'usd': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'eur': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'gbp': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'chf': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'rub': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'uah': return (this.props.kolichestvoValuti)
  //             case 'pln': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'czk': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'kzt': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'cny': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             default:
  //         }
  //             break;

  //         case 'pln': switch (item.kodval) {

  //             case 'byn': return ((this.props.kolichestvoValuti * this.props.activPriceBuy).toFixed(2))
  //             case 'usd': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'eur': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'gbp': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'chf': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'rub': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'uah': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'pln': return (this.props.kolichestvoValuti)
  //             case 'czk': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'kzt': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'cny': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             default:
  //         }
  //             break;

  //         case 'czk': switch (item.kodval) {

  //             case 'byn': return ((this.props.kolichestvoValuti * this.props.activPriceBuy).toFixed(2))
  //             case 'usd': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'eur': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'gbp': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'chf': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'rub': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'uah': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'pln': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'czk': return (this.props.kolichestvoValuti)
  //             case 'kzt': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'cny': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             default:
  //         }
  //             break;

  //         case 'kzt': switch (item.kodval) {

  //             case 'byn': return ((this.props.kolichestvoValuti * this.props.activPriceBuy).toFixed(2))
  //             case 'usd': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'eur': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'gbp': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'chf': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'rub': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'uah': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'pln': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'czk': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'kzt': return (this.props.kolichestvoValuti)
  //             case 'cny': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             default:
  //         }
  //             break;

  //         case 'cny': switch (item.kodval) {

  //             case 'byn': return ((this.props.kolichestvoValuti * this.props.activPriceBuy).toFixed(2))
  //             case 'usd': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'eur': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'gbp': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'chf': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'rub': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'uah': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'pln': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'czk': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'kzt': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
  //             case 'cny': return (this.props.kolichestvoValuti)
  //             default:
  //         }
  //             break;

  //         default:
  //     }
  // }

  mainScreen = () => {
    return (
      // <div className="conteiner-body-main">
      //   <div className="text">
      //     <p>Лепшы курс каб набыць беларускія рублі ў Мінску</p>
      //   </div>
      //   <div className="conteiner-flex">
      //     {this.props.kursibanki.map(item => {
      //       if (item.name !== "") {
      //         if (
      //           this.props.filter === item.kodval &&
      //           this.props.buystatus === item.kodpara.split("_")[2]
      //         ) {
      //           return this.vivodpari(item);
      //         }

      //         if (
      //           this.props.filter !== item.kodval &&
      //           this.props.buystatus !== item.kodpara.split("_")[2]
      //         ) {
      //           return this.vivodpari(item);
      //         }
      //       }
      //     })}
      //   </div>
      // </div>
    );
  };

  // main screen

  // second screen

  // secondScreenHtml = (item1, item2, bankiSecond, propss) => {
  //   console.log("vivodToo", item2);

  //   let size1 = {
  //     width: `${calculationPairRate(item1, propss).length * 14 || 3 * 14}px`
  //   };
  //   let size2 = {
  //     width: `${calculationPairRate(item2, propss).length * 14 || 3 * 14}px`
  //   };
  //   const mapState = { center: [53.902496, 27.561481], zoom: 13 };

  //   return (
  //     <div className="conteiner-second-grid">
  //       <div className="column1">
  //         <div className="buttonBanks" onClick={propss.perehodBanks}>
  //           <img src={arrowLeft} /> Усе валюты
  //         </div>
  //         <div className="text">
  //           Дзе набыць беларускія рублі за расейскія рублі па лепшым курсе
  //         </div>
  //         <div className="conteiner-second">
  //           <div
  //             className={
  //               propss.filter === item1.kodval
  //                 ? "block-curces active"
  //                 : "block-curces"
  //             }
  //             key={item1.id}
  //           >
  //             <div className="input-block">
  //               <input
  //                 type="text"
  //                 style={size1}
  //                 value={calculationPairRate(item1, propss)}
  //                 id={item1.kodval}
  //                 onChange={this.handleSetKolvo1}
  //                 key={item1.id}
  //                 data-value={item1.kodval}
  //                 data={item1.price}
  //                 onClick={
  //                   propss.filter !== item1.kodval
  //                     ? this.handleFilterChage
  //                     : this.zaglushka
  //                 }
  //                 name={item1.id}
  //                 ref={item1.kodval}
  //                 onFocus={this.handleFocus}
  //               />
  //             </div>

  //             <div className="img-flags-block">
  //               <img
  //                 src={"/flags/" + item1.kodval + ".png"}
  //                 className="rounded float-right"
  //                 alt={item1.name}
  //                 title={item1.name}
  //                 data={item1.price}
  //                 data-value={item1.kodval}
  //                 onClick={this.clickFlagFocusInput}
  //               />
  //             </div>
  //           </div>

  //           <span>=</span>

  //           <div className="block-curces" key={item2.id}>
  //             <div className="input-block">
  //               <input
  //                 type="text"
  //                 style={size2}
  //                 value={calculationPairRate(item2, propss)}
  //                 id={item2.kodval}
  //                 onChange={this.handleSetKolvo1}
  //                 key={item2.id}
  //                 data-value={item2.kodval}
  //                 data={item2.price}
  //                 onClick={this.zaglushka}
  //                 name={item2.id}
  //                 ref={item2.kodval}
  //                 onFocus={this.handleFocus}
  //                 disabled
  //               />
  //             </div>

  //             <div className="img-flags-block">
  //               <img
  //                 src={"/flags/" + item2.kodval + ".png"}
  //                 className="rounded float-right"
  //                 alt={item2.name}
  //                 title={item2.name}
  //                 data={item2.price}
  //                 data-value={item2.kodval}
  //                 //onClick={this.clickFlagFocusInput}
  //               />
  //             </div>
  //           </div>
  //         </div>

  //         <ul>{this.displayBanksSecondScreen(bankiSecond.banks)}</ul>
  //       </div>

  //       <div className="column2" id="conteiner-map">
  //         {this.MyPlacemark(mapState)}
  //       </div>
  //     </div>
  //   );
  // };

  // MyPlacemark = mapState => (
  //   <YMaps>
  //     <Map state={mapState} width="100%" height="100%">
  //       <Placemark
  //         geometry={{
  //           coordinates: [55.751574, 37.573856]
  //         }}
  //         properties={{
  //           hintContent: "Собственный значок метки",
  //           balloonContent: "Это красивая метка"
  //         }}
  //         options={{
  //           iconLayout: "default#image",
  //           iconImageHref: "images/myIcon.gif",
  //           iconImageSize: [30, 42],
  //           iconImageOffset: [-3, -42]
  //         }}
  //       />
  //     </Map>
  //   </YMaps>
  // );

  displayBanksSecondScreen = bank => {
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

  // secondScreen = () => {
  //   switch (this.props.filter) {
  //     case "byn":
  //       switch (this.props.activePareBanks) {
  //         case "usd_byn_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[0],
  //             this.props.state.kursibanki[3],
  //             this.props.state.kursibanki[3],
  //             this.props
  //           );
  //         case "eur_byn_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[0],
  //             this.props.state.kursibanki[5],
  //             this.props.state.kursibanki[5],
  //             this.props
  //           );
  //         case "gbp_byn_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[0],
  //             this.props.state.kursibanki[7],
  //             this.props.state.kursibanki[7],
  //             this.props
  //           );
  //         case "chf_byn_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[0],
  //             this.props.state.kursibanki[9],
  //             this.props.state.kursibanki[9],
  //             this.props
  //           );
  //         case "rub_byn_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[0],
  //             this.props.state.kursibanki[11],
  //             this.props.state.kursibanki[11],
  //             this.props
  //           );
  //         case "uah_byn_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[0],
  //             this.props.state.kursibanki[13],
  //             this.props.state.kursibanki[13],
  //             this.props
  //           );
  //         case "pln_byn_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[0],
  //             this.props.state.kursibanki[15],
  //             this.props.state.kursibanki[15],
  //             this.props
  //           );
  //         case "czk_byn_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[0],
  //             this.props.state.kursibanki[17],
  //             this.props.state.kursibanki[17],
  //             this.props
  //           );
  //         case "kzt_byn_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[0],
  //             this.props.state.kursibanki[19],
  //             this.props.state.kursibanki[19],
  //             this.props
  //           );
  //         case "cny_byn_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[0],
  //             this.props.state.kursibanki[21],
  //             this.props.state.kursibanki[21],
  //             this.props
  //           );

  //         case "usd_byn_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[1],
  //             this.props.state.kursibanki[2],
  //             this.props.state.kursibanki[2],
  //             this.props
  //           );
  //         case "eur_byn_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[1],
  //             this.props.state.kursibanki[4],
  //             this.props.state.kursibanki[4],
  //             this.props
  //           );
  //         case "gbp_byn_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[1],
  //             this.props.state.kursibanki[6],
  //             this.props.state.kursibanki[6],
  //             this.props
  //           );
  //         case "chf_byn_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[1],
  //             this.props.state.kursibanki[8],
  //             this.props.state.kursibanki[8],
  //             this.props
  //           );
  //         case "rub_byn_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[1],
  //             this.props.state.kursibanki[10],
  //             this.props.state.kursibanki[10],
  //             this.props
  //           );
  //         case "uah_byn_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[1],
  //             this.props.state.kursibanki[12],
  //             this.props.state.kursibanki[12],
  //             this.props
  //           );
  //         case "pln_byn_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[1],
  //             this.props.state.kursibanki[14],
  //             this.props.state.kursibanki[14],
  //             this.props
  //           );
  //         case "czk_byn_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[1],
  //             this.props.state.kursibanki[16],
  //             this.props.state.kursibanki[16],
  //             this.props
  //           );
  //         case "kzt_byn_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[1],
  //             this.props.state.kursibanki[18],
  //             this.props.state.kursibanki[18],
  //             this.props
  //           );
  //         case "cny_byn_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[1],
  //             this.props.state.kursibanki[20],
  //             this.props.state.kursibanki[20],
  //             this.props
  //           );
  //         default:
  //       }
  //       break;

  //     case "usd":
  //       switch (this.props.activePareBanks) {
  //         case "usd_byn_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[2],
  //             this.props.state.kursibanki[0],
  //             this.props.state.kursibanki[3],
  //             this.props
  //           );
  //         case "eur_usd_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[2],
  //             this.props.state.kursibanki[4],
  //             this.props.state.kursibanki[23],
  //             this.props
  //           );
  //         case "usd_rub_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[2],
  //             this.props.state.kursibanki[10],
  //             this.props.state.kursibanki[27],
  //             this.props
  //           );

  //         case "usd_byn_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[3],
  //             this.props.state.kursibanki[1],
  //             this.props.state.kursibanki[2],
  //             this.props
  //           );
  //         case "eur_usd_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[3],
  //             this.props.state.kursibanki[5],
  //             this.props.state.kursibanki[22],
  //             this.props
  //           );
  //         case "usd_rub_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[3],
  //             this.props.state.kursibanki[11],
  //             this.props.state.kursibanki[26],
  //             this.props
  //           );
  //         default:
  //       }
  //       break;

  //     case "eur":
  //       switch (this.props.activePareBanks) {
  //         case "eur_byn_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[4],
  //             this.props.state.kursibanki[0],
  //             this.props.state.kursibanki[5],
  //             this.props
  //           );
  //         case "eur_usd_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[4],
  //             this.props.state.kursibanki[2],
  //             this.props.state.kursibanki[23],
  //             this.props
  //           );
  //         case "eur_rub_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[4],
  //             this.props.state.kursibanki[10],
  //             this.props.state.kursibanki[25],
  //             this.props
  //           );

  //         case "eur_byn_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[5],
  //             this.props.state.kursibanki[1],
  //             this.props.state.kursibanki[4],
  //             this.props
  //           );
  //         case "eur_usd_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[5],
  //             this.props.state.kursibanki[3],
  //             this.props.state.kursibanki[22],
  //             this.props
  //           );
  //         case "eur_rub_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[5],
  //             this.props.state.kursibanki[11],
  //             this.props.state.kursibanki[24],
  //             this.props
  //           );
  //         default:
  //       }
  //       break;

  //     case "gbp":
  //       switch (this.props.activePareBanks) {
  //         case "gbp_byn_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[6],
  //             this.props.state.kursibanki[0],
  //             this.props.state.kursibanki[7],
  //             this.props
  //           );

  //         case "gbp_byn_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[7],
  //             this.props.state.kursibanki[1],
  //             this.props.state.kursibanki[6],
  //             this.props
  //           );
  //         default:
  //       }
  //       break;

  //     case "chf":
  //       switch (this.props.activePareBanks) {
  //         case "chf_byn_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[8],
  //             this.props.state.kursibanki[0],
  //             this.props.state.kursibanki[9],
  //             this.props
  //           );

  //         case "chf_byn_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[9],
  //             this.props.state.kursibanki[1],
  //             this.props.state.kursibanki[8],
  //             this.props
  //           );
  //         default:
  //       }
  //       break;

  //     case "rub":
  //       switch (this.props.activePareBanks) {
  //         case "rub_byn_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[10],
  //             this.props.state.kursibanki[0],
  //             this.props.state.kursibanki[11],
  //             this.props
  //           );
  //         case "usd_rub_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[10],
  //             this.props.state.kursibanki[2],
  //             this.props.state.kursibanki[27],
  //             this.props
  //           );
  //         case "eur_rub_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[10],
  //             this.props.state.kursibanki[4],
  //             this.props.state.kursibanki[25],
  //             this.props
  //           );

  //         case "rub_byn_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[11],
  //             this.props.state.kursibanki[1],
  //             this.props.state.kursibanki[10],
  //             this.props
  //           );
  //         case "usd_rub_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[11],
  //             this.props.state.kursibanki[3],
  //             this.props.state.kursibanki[26],
  //             this.props
  //           );
  //         case "eur_rub_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[11],
  //             this.props.state.kursibanki[5],
  //             this.props.state.kursibanki[24],
  //             this.props
  //           );
  //         default:
  //       }
  //       break;

  //     case "uah":
  //       switch (this.props.activePareBanks) {
  //         case "uah_byn_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[12],
  //             this.props.state.kursibanki[0],
  //             this.props.state.kursibanki[13],
  //             this.props
  //           );

  //         case "uah_byn_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[13],
  //             this.props.state.kursibanki[1],
  //             this.props.state.kursibanki[12],
  //             this.props
  //           );
  //         default:
  //       }
  //       break;

  //     case "pln":
  //       switch (this.props.activePareBanks) {
  //         case "pln_byn_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[14],
  //             this.props.state.kursibanki[0],
  //             this.props.state.kursibanki[15],
  //             this.props
  //           );

  //         case "pln_byn_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[15],
  //             this.props.state.kursibanki[1],
  //             this.props.state.kursibanki[14],
  //             this.props
  //           );
  //         default:
  //       }
  //       break;

  //     case "czk":
  //       switch (this.props.activePareBanks) {
  //         case "czk_byn_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[16],
  //             this.props.state.kursibanki[0],
  //             this.props.state.kursibanki[16],
  //             this.props
  //           );

  //         case "czk_byn_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[17],
  //             this.props.state.kursibanki[1],
  //             this.props.state.kursibanki[17],
  //             this.props
  //           );
  //         default:
  //       }
  //       break;

  //     case "kzt":
  //       switch (this.props.activePareBanks) {
  //         case "kzt_byn_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[18],
  //             this.props.state.kursibanki[0],
  //             this.props.state.kursibanki[19],
  //             this.props
  //           );

  //         case "kzt_byn_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[19],
  //             this.props.state.kursibanki[1],
  //             this.props.state.kursibanki[18],
  //             this.props
  //           );
  //         default:
  //       }
  //       break;

  //     case "cny":
  //       switch (this.props.activePareBanks) {
  //         case "cny_byn_sell":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[20],
  //             this.props.state.kursibanki[0],
  //             this.props.state.kursibanki[21],
  //             this.props
  //           );

  //         case "cny_byn_buy":
  //           return this.secondScreenHtml(
  //             this.props.state.kursibanki[21],
  //             this.props.state.kursibanki[1],
  //             this.props.state.kursibanki[20],
  //             this.props
  //           );
  //         default:
  //       }
  //       break;

  //     default:
  //   }
  // };

  render() {
    return (
      <div>
        {!this.props.viewBankList ? this.mainScreen() : this.secondScreen()}
      </div>
    );
  }
}

export default ListValut;

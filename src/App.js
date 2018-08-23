import React, { Component } from 'react';
import { dataApi } from './dataApi';
import ListValut from './components/listValut/listValut';


class App extends Component {

  constructor() {
    super()

    this.state = {
      valuta: [
        {
          id: "v001",
          kod: "BYN",
          name: "Белорусский рубль",
          bankBuy: [
            "001", "0032", "005", "007"
          ],
          bankSell: [
            "002", "001", "005"
          ],
          buy: 1,
          sell: 1,
          status: false
        },{
          id: "v002",
          kod: "USD",
          name: "Доллар США",
          bankBuy: [
            "001", "0032", "005", "007"
          ],
          bankSell: [
            "002", "001", "005"
          ],
          buy: 2.045,
          sell: 2.055,
          status: false
        },{
          id: "v003",
          kod: "EUR",
          name: "Евро",
          bankBuy: [
            "001", "0032", "005", "007"
          ],
          bankSell: [
            "002", "001", "005"
          ],
          buy: 2.332,
          sell: 2.372,
          status: false
        },{
          id: "v004",
          kod: "GBP",
          name: "Фунт стерлингов",
          bankBuy: [
            "001", "0032", "005", "007"
          ],
          bankSell: [
            "002", "001", "005"
          ],
          buy: 2.6181,
          sell: 2.62,
          status: false
        },{
          id: "v005",
          kod: "CHF",
          name: "Швейцарский франк",
          bankBuy: [
            "001", "0032", "005", "007"
          ],
          bankSell: [
            "002", "001", "005"
          ],
          buy: 2.0251,
          sell: 2.06,
          status: false
        },{
          id: "v006",
          kod: "RUB",
          name: "Российский рубль",
          bankBuy: [
            "001", "0032", "005", "007"
          ],
          bankSell: [
            "002", "001", "005"
          ],
          buy: 30.55,
          sell: 30.85,
          status: false
        },{
          id: "v007",
          kod: "UAH",
          name: "Гривна",
          bankBuy: [
            "001", "0032", "005", "007"
          ],
          bankSell: [
            "002", "001", "005"
          ],
          buy: 7.58,
          sell: 7.6,
          status: false
        },{
          id: "v008",
          kod: "PLN",
          name: "Злотый",
          bankBuy: [
            "001", "0032", "005", "007"
          ],
          bankSell: [
            "002", "001", "005"
          ],
          buy: 5.385,
          sell: 5.45,
          status: false
        },{
          id: "v009",
          kod: "CZK",
          name: "Чешская крона",
          bankBuy: [
            "001", "0032", "005", "007"
          ],
          bankSell: [
            "002", "001", "005"
          ],
          buy: 8.85,
          sell: 9.3,
          status: false
        },{
          id: "v010",
          kod: "KZT",
          name: "Тенге",
          bankBuy: [
            "001", "0032", "005", "007"
          ],
          bankSell: [
            "002", "001", "005"
          ],
          buy: 2.5,
          sell: 5.77,
          status: false
        },{
          id: "v011",
          kod: "CNY",
          name: "Юань",
          bankBuy: [
            "001", "0032", "005", "007"
          ],
          bankSell: [
            "002", "001", "005"
          ],
          buy: 2.9397,
          sell: 3.04,
          status: false
        },{
          id: "v012",
          kod: "BTC",
          name: "Биткойн",
          bankBuy: [
            "001", "0032", "005", "007"
          ],
          bankSell: [
            "002", "001", "005"
          ],
          buy: 0.00008,
          sell: 0.000079,
          status: false
        }
      ],

      filter: "byn",
      activPriceBuy: 1,
      kolichestvoValuti: 1,
      bank: {},
      columns: [],
      kursibanki:[{
        id: '001',
        kodpara: "byn_byn_buy",
        name: "Белорусский рубль",
        price: 1
    }, {
        id: '002',
        kodpara: "byn_byn_sell",
        name: "Белорусский рубль",
        price: 1
    }, {
        id: '003',
        kodpara: "usd_byn_buy",
        name: "Доллар США",
        price: ''
    }, {
        id: '004',
        kodpara: "usd_byn_sell",
        name: "Доллар США",
        price: ''
    }, {
        id: '005',
        kodpara: "eur_byn_buy",
        name: "EUR",
        price: ''
    }, {
        id: '006',
        kodpara: "eur_byn_sell",
        name: "EUR",
        price: ''
    }, {
        id: '007',
        kodpara: "gbp_byn_buy",
        name: "Фунт стерлингов",
        price: ''
    }, {
        id: '008',
        kodpara: "gbp_byn_sell",
        name: "Фунт стерлингов",
        price: ''
    }, {
        id: '009',
        kodpara: "chf_byn_buy",
        name: "Швейцарский франк",
        price: ''
    }, {
        id: '010',
        kodpara: "chf_byn_sell",
        name: "Швейцарский франк",
        price: ''
    }, {
        id: '011',
        kodpara: "rub_byn_buy",
        name: "Российский рубль",
        price: ''
    }, {
        id: '012',
        kodpara: "rub_byn_sell",
        name: "Российский рубль",
        price: ''
    }, {
        id: '013',
        kodpara: "uah_byn_buy",
        name: "Гривна",
        price: ''
    }, {
        id: '014',
        kodpara: "uah_byn_sell",
        name: "Гривна",
        price: ''
    }, {
        id: '015',
        kodpara: "pln_byn_buy",
        name: "Злотый",
        price: ''
    }, {
        id: '016',
        kodpara: "pln_byn_sell",
        name: "Злотый",
        price: ''
    }, {
        id: '017',
        kodpara: "czk_byn_buy",
        name: "Чешская крона",
        price: ''
    }, {
        id: '018',
        kodpara: "czk_byn_sell",
        name: "Чешская крона",
        price: ''
    }, {
        id: '019',
        kodpara: "kzt_byn_buy",
        name: "Тенге",
        price: ''
    }, {
        id: '020',
        kodpara: "kzt_byn_sell",
        name: "Тенге",
        price: ''
    }, {
        id: '021',
        kodpara: "cny_byn_buy",
        name: "Юань",
        price: ''
    }, {
        id: '022',
        kodpara: "cny_byn_sell",
        name: "Юань",
        price: ''
    }, {
        id: '023',
        kodpara: "eur_usd_buy",
        name: '',
        price: ''
    }, {
        id: '024',
        kodpara: "eur_usd_sell",
        name: '',
        price: ''
    }, {
        id: '025',
        kodpara: "eur_rub_buy",
        name: '',
        price: ''
    }, {
        id: '026',
        kodpara: "eur_rub_sell",
        name: '',
        price: ''
    }, {
        id: '027',
        kodpara: "usd_rub_buy",
        name: '',
        price: ''
    }, {
        id: '028',
        kodpara: "usd_rub_sell",
        name: '',
        price: ''
    }],
      buystatus: 'sell'
    };
    
    this.state.kursibanki = dataApi;
  }


  changeFilter = (filtrValue) => {
    this.setState({
      filter: filtrValue
    });

    const newKursList1 = [...this.state.valuta];
    newKursList1.forEach((v) => {    
      
      if (v.kod === filtrValue) {        
        this.setState({
          activPriceBuy: v.buy
        })        
        
      }
    })
    
  }

  handleStatus = (valutaId) => {
    
    const newKursList = [...this.state.valuta];
    newKursList.forEach((v) => {    
      
      if (v.id === valutaId) {        
        v.status = !v.status;        
        
      } else {
        v.status = false;
      }
    })
    
    this.setState({
      valuta: newKursList
    });   
    
  }

  handleSetKolvo = (kl) => {
    this.setState({
      kolichestvoValuti: kl
    })
  }

  setKurs = (kurs) => {
    this.setState({
      activPriceBuy: kurs
    });

  }


  izmenenieKParrent = (classBtn) => {
    
    if (classBtn === 'switch-btn switch-on') {
      this.setState({
        buystatus: 'buy'
      })
    } else {
      this.setState({
        buystatus: 'sell'
      })
    }
  }

  // componentDidMount () {

  // //var data = 1;
  // var that = this;   
  // var request = new Request('http://localhost:5006/api', {
  //   method: 'POST',
  //   headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'}),
  //   //body: data
  // });
  // fetch(request)
  // .then(function(response) {response.json()
  //   .then(function(data) {
  //     let newData = Object.assign(that.state.kursibanki, data);
  //     that.setState({kursibanki: newData});

      
      

  //   })
  // })
  // .catch(function(err) {console.log(err)
  //   });



    
  //  }



  render() {
    
    return (
      <div className="conteiner">
            
        <ListValut 
        kurs={this.state.valuta}
        filter={this.state.filter}
        onFilterChanged={this.changeFilter}
        handleStatus={this.handleStatus} 
        setKurs={this.setKurs}
        activPriceBuy = {this.state.activPriceBuy}
        handleSetKolvo ={this.handleSetKolvo}
        kolichestvoValuti={this.state.kolichestvoValuti}
        kursibanki={this.state.kursibanki}
        buystatus={this.state.buystatus}
        izmenenieKParrent={this.izmenenieKParrent}
        />

        <button onClick={this.poluchenieDannih}>
          Get!
        </button>

        
        
        
      </div>
    );
  }
}

export default App;

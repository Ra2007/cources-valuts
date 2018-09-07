import React, { Component } from 'react';
import { dataApi } from './dataAppp';
import ListValut from './components/listValut/listValut';



class App extends Component {

  constructor() {
    super()
    this.state = {
      filter: "byn",
      kolichestvoValuti: 100,
      activPriceBuy: 1,
      buystatus: 'buy',
      viewBankList: false,
      activePareBanks: '',
      kursibanki: []
    };
    this.state.kursibanki = dataApi;
  }



  handleActiveParBanks = (para) => {
    this.setState({
      activePareBanks: para
    });
    console.log(this.state.activePareBanks)
  }


  changeFilter = (filtrValue) => {
    this.setState({
      filter: filtrValue
    });
  }

  perehodBanks = () => {
console.log('11')
    let newViewBankList = !this.state.viewBankList;
    this.setState({
      viewBankList: newViewBankList
    });
  }

  handleActivPrice = (price) => {
    this.setState({
      activPriceBuy: price
    })
  }

 handleSetKolvo = (kl) => {
    this.setState({
      kolichestvoValuti: kl
    })
  }

  izmenenieKParrent = (classBtn) => {
    if (classBtn === 'switch-btn switch-on') {
      this.setState({
        buystatus: 'sell'
      })
    } else {
      this.setState({
        buystatus: 'buy'
      })
    }
  }

  izmstst = () => {
    if (this.state.buystatus === 'buy') {
      this.setState({
        buystatus: 'sell'
      })
    } else {
      this.setState({
        buystatus: 'buy'
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
      
      <ListValut          
          filter={this.state.filter}
          onFilterChanged={this.changeFilter}
          activPriceBuy={this.state.activPriceBuy}
          handleSetKolvo={this.handleSetKolvo}
          kolichestvoValuti={this.state.kolichestvoValuti}
          kursibanki={this.state.kursibanki}
          buystatus={this.state.buystatus}
          izmenenieKParrent={this.izmenenieKParrent}
          handleActivPrice={this.handleActivPrice}
          izmstst={this.izmstst}
          perehodBanks={this.perehodBanks}
          viewBankList={this.state.viewBankList}
          state={this.state}
          handleActiveParBanks={this.handleActiveParBanks}
          activePareBanks={this.state.activePareBanks}
        />
        
         
      
    );
  }
}
export default App;

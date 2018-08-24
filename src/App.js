import React, { Component } from 'react';
import { dataApi } from './data.js';
import ListValut from './components/listValut/listValut';

class App extends Component {

  constructor() {
    super()
    
    this.state = {
      filter: "byn",
      kolichestvoValuti: 100,
      activPriceBuy: 1,
      buystatus: 'buy',
      kursibanki: []
    };
    
    this.state.kursibanki = dataApi;
  }


  changeFilter = (filtrValue) => {

    
    this.setState({
      filter: filtrValue
    });
    
  }

  handleActivPrice = (price) => {
    this.setState({
      activPriceBuy: price
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
        handleActivPrice={this.handleActivPrice}
        />

      </div>
    );
  }
}

export default App;

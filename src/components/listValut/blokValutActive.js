import React, { Component } from 'react';
import './blokValutActive.css';

class BlokValutActive extends Component {

    constructor(props) {
        super();
    }

    izmenenieKupiProd =(e) => {
        this.props.izmenenieKP(e.currentTarget.className);
    }

    render() {
        let { item } = this.props;
        
        return (
            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 block1 active"
                key={item.id}
                data-value={item.kodval}
                onClick={this.handleFilterChage} >
                <div className="input-group input-group-sm mb-3">
                    <input type="text" className="form-control valuta" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                        key={item.kodval}
                        value={this.props.kolichestvoValuti}
                        onChange={this.props.handleSetKolvo1}
                    />
                    <img src={'/flags/' + item.kodval + '.png'} className="imgStr" alt={item.name} title={item.name} />
                </div>
                <div className={this.props.buystatus === 'sell' ? 'switch-btn switch-on' : 'switch-btn'} 
                    onClick={this.izmenenieKupiProd}>{this.props.buystatus === 'sell' ? 'продать' : 'купить'}
                </div> 
            </div>
        )
    }
}
export default BlokValutActive;
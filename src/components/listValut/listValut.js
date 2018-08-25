import React, { Component } from 'react';
import './listValut.css';

class ListValut extends Component {

    handleFilterChage = (e) => {
        const valact11 = e.currentTarget.dataset.value;
        this.props.handleActivPrice(Object.values(e.currentTarget)[1].data);
        this.props.handleSetKolvo(document.getElementById(valact11).value);
        
        this.props.onFilterChanged(e.currentTarget.dataset.value);
        this.props.izmstst();
    }

    

    handleSetKolvo1 = (e) => {
        this.props.handleSetKolvo(e.currentTarget.value)
    }

    izmenenieKP = (e) => {
        const valact = e.currentTarget.dataset.value;
        this.props.handleSetKolvo(document.getElementById(valact).value)
        this.props.izmenenieKParrent((e.currentTarget.className));
    }

    zaglushka = () => {
        console.log('zaglushka')
    }


    vivodpari = (item) => {
        return (<div className={this.props.filter === item.kodval ? 'col-sm-2 col-md-2 col-lg-2 col-xl-2 active' : 'col-sm-2 col-md-2 col-lg-2 col-xl-2'}
            key={item.id} data-value={item.kodval} data={item.price} onClick={this.props.filter !== item.kodval ? this.handleFilterChage : this.zaglushka}  >

            <input type="text" value={this.raschetprice(item)} id={item.kodval} onChange={this.handleSetKolvo1} />

            <p>{item.name}<br />{item.price}<br />{item.kodpara}</p>
            <div className={item.kodpara.split('_')[2] === 'buy' ? 'switch-btn switch-on' : 'switch-btn'}
                 onClick={this.izmenenieKP} 
                data-value={item.kodval}> {item.kodpara.split('_')[2] === 'sell' ? 'КУПИТЬ(buy)' : 'ПРОДАТЬ(sell)'}
            </div>
        </div>
        )

    }

    raschetprice = (item) => {

        switch (this.props.filter) {
            case 'byn': return (this.props.filter === item.kodval ? this.props.kolichestvoValuti : (this.props.kolichestvoValuti / item.price).toFixed(2))

            case 'usd': switch (item.kodval) {

                case 'byn': return ((this.props.kolichestvoValuti * this.props.activPriceBuy).toFixed(2))
                case 'usd': return (this.props.kolichestvoValuti)
                case 'eur': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'gbp': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'chf': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'rub': return (item.kodpara.split('_')[2] === 'buy' ? (this.props.kolichestvoValuti * this.props.kursibanki[27].price).toFixed(2) : (this.props.kolichestvoValuti * this.props.kursibanki[26].price).toFixed(2))
                case 'uah': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'pln': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'czk': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'kzt': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'cny': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                default:
            }
                break;

            case 'eur': switch (item.kodval) {

                case 'byn': return ((this.props.kolichestvoValuti * this.props.activPriceBuy).toFixed(2))
                case 'usd': return (item.kodpara.split('_')[2] === 'buy' ? (this.props.kolichestvoValuti * this.props.kursibanki[23].price).toFixed(2) : (this.props.kolichestvoValuti * this.props.kursibanki[22].price).toFixed(2))
                case 'eur': return (this.props.kolichestvoValuti)
                case 'gbp': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'chf': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'rub': return (item.kodpara.split('_')[2] === 'buy' ? (this.props.kolichestvoValuti * this.props.kursibanki[25].price).toFixed(2) : (this.props.kolichestvoValuti * this.props.kursibanki[24].price).toFixed(2))
                case 'uah': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'pln': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'czk': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'kzt': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'cny': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                default:
            }
                break;

            case 'gbp': switch (item.kodval) {

                case 'byn': return ((this.props.kolichestvoValuti * this.props.activPriceBuy).toFixed(2))
                case 'usd': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'eur': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'gbp': return (this.props.kolichestvoValuti)
                case 'chf': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'rub': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'uah': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'pln': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'czk': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'kzt': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'cny': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                default:
            }
                break;

            case 'chf': switch (item.kodval) {

                case 'byn': return ((this.props.kolichestvoValuti * this.props.activPriceBuy).toFixed(2))
                case 'usd': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'eur': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'gbp': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'chf': return (this.props.kolichestvoValuti)
                case 'rub': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'uah': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'pln': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'czk': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'kzt': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'cny': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                default:
            }
                break;

            case 'rub': switch (item.kodval) {

                case 'byn': return ((this.props.kolichestvoValuti * this.props.activPriceBuy).toFixed(2))
                case 'usd': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'eur': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'gbp': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'chf': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'rub': return (this.props.kolichestvoValuti)
                case 'uah': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'pln': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'czk': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'kzt': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'cny': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                default:
            }
                break;

            case 'uah': switch (item.kodval) {

                case 'byn': return ((this.props.kolichestvoValuti * this.props.activPriceBuy).toFixed(2))
                case 'usd': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'eur': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'gbp': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'chf': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'rub': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'uah': return (this.props.kolichestvoValuti)
                case 'pln': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'czk': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'kzt': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'cny': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                default:
            }
                break;

            case 'pln': switch (item.kodval) {

                case 'byn': return ((this.props.kolichestvoValuti * this.props.activPriceBuy).toFixed(2))
                case 'usd': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'eur': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'gbp': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'chf': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'rub': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'uah': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'pln': return (this.props.kolichestvoValuti)
                case 'czk': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'kzt': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'cny': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                default:
            }
                break;

            case 'czk': switch (item.kodval) {

                case 'byn': return ((this.props.kolichestvoValuti * this.props.activPriceBuy).toFixed(2))
                case 'usd': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'eur': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'gbp': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'chf': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'rub': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'uah': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'pln': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'czk': return (this.props.kolichestvoValuti)
                case 'kzt': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'cny': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                default:
            }
                break;

            case 'kzt': switch (item.kodval) {

                case 'byn': return ((this.props.kolichestvoValuti * this.props.activPriceBuy).toFixed(2))
                case 'usd': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'eur': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'gbp': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'chf': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'rub': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'uah': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'pln': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'czk': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'kzt': return (this.props.kolichestvoValuti)
                case 'cny': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                default:
            }
                break;

            case 'cny': switch (item.kodval) {

                case 'byn': return ((this.props.kolichestvoValuti * this.props.activPriceBuy).toFixed(2))
                case 'usd': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'eur': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'gbp': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'chf': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'rub': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'uah': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'pln': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'czk': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'kzt': return ((this.props.kolichestvoValuti * this.props.activPriceBuy / item.price).toFixed(2))
                case 'cny': return (this.props.kolichestvoValuti)
                default:
            }
                break;

            default:
        }
    }

    render() {
        return (
            <div className="contValuta">
                <div className="row">
                    {this.props.kursibanki.map((item) => {
                        if (item.name !== '') {
                            if (this.props.filter === item.kodval && this.props.buystatus === item.kodpara.split('_')[2]) { 
                                return (this.vivodpari(item))
                            }
                            
                            if (this.props.filter !== item.kodval && this.props.buystatus !== item.kodpara.split('_')[2]) {
                                return (this.vivodpari(item))
                            }
                        }
                    })
                    }
                </div>
            </div>
        )
    }
}
export default ListValut;
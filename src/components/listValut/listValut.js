import React, { Component } from 'react';


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

    toggle = (item) => {
        return (<div className="toggle-text">
            <div className={item.kodpara.split('_')[2] === 'buy' ? 'switch-btn switch-on' : 'switch-btn'}
                onClick={this.izmenenieKP}
                data-value={item.kodval}>
                <span>
                {item.kodpara.split('_')[2] === 'sell' ? 'КУПИТЬ' : 'ПРОДАТЬ'}
                </span>
                
            </div>
        </div>
        )
    }

    spisokBankov = (item) => {
        return (<div className="banks-text" ><ul className="ul-desktop">
            {this.viborkaBanks(item.banks).map((item) => {
                return (<li key={item}><a href="images/xxx.jpg">{item}</a></li>)
            })}
        </ul>

        <ul className="ul-smart">
            {
                <li key={this.viborkaBanks(item.banks)[0]}><a href="images/xxx.jpg">{this.viborkaBanks(item.banks)[0]} > </a></li>
            }
        </ul>
        </div>
        )
    }


    viborkaBanks = arr => {
        var obj = [];

        for (var i = 0; i < arr.length; i++) {
            var str = arr[i];
            var tls = str.split(':')[1]
            obj[i] = tls; // запомнить строку в виде свойства объекта
        }
        var arreys = this.unique(obj);
        return arreys;
    };

    unique = (arr1) => {

        var obj1 = {};

        for (var i = 0; i < arr1.length; i++) {
            var str1 = arr1[i];
            obj1[str1] = true;
        }
        return Object.keys(obj1);
    }

    selectInput = (e) => {
        // this.select();
        console.log('123')
    }


    vivodpari = (item) => {
        return (<div className={this.props.filter === item.kodval ? 'block-curces active' : 'block-curces'}
            key={item.id} data-value={item.kodval} data={item.price} onClick={this.props.filter !== item.kodval ? this.handleFilterChage : this.zaglushka}  >


                <div className="input-block">
                    <input type="text" value={this.raschetprice(item)} id={item.kodval} onChange={this.handleSetKolvo1} onClick={this.selectInput} />
                </div>

                <div className="img-flags-block">
                    <img src={'/flags/' + item.kodval + '.png'} className="rounded float-right" alt={item.name} title={item.name} />
                </div>

                <div className="bottom-content-block">
                    
                        {this.props.filter === item.kodval ? this.toggle(item) : this.spisokBankov(item)}
                    
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
        return (<div className="conteiner-flex">
            
                
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
                
            
        )
    }
}
export default ListValut;
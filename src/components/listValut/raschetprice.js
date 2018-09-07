function raschetprice(item) {

        switch (this.props.filter) {
            case 'byn': return (this.props.filter === item.kodval ? this.props.kolichestvoValuti : (this.props.kolichestvoValuti / item.price).toFixed(2))

            case 'usd': switch (item.kodval) {

                case 'byn': return ((this.props.kolichestvoValuti * this.props.activPriceBuy).toFixed(2))
                case 'usd': return (this.props.kolichestvoValuti)
                case 'eur': return ((this.props.kolichestvoValuti * this.props.activPriceBuy.toFixed(2) / item.price.toFixed(2)))
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
                case 'usd': return (item.kodpara.split('_')[2] === 'buy' ? (this.props.kolichestvoValuti * (this.props.kursibanki[23].price).toFixed(2)) : (this.props.kolichestvoValuti * (this.props.kursibanki[22].price).toFixed(2)))
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

    export default raschetprice()

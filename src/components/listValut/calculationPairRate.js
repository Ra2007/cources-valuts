import React from 'react';

const calculationPairRate = (item, propss) => {

        switch (propss.filter) {
            case 'byn': return (propss.filter === item.kodval ? propss.kolichestvoValuti : (propss.kolichestvoValuti / item.price).toFixed(2))

            case 'usd': switch (item.kodval) {

                case 'byn': return ((propss.kolichestvoValuti * propss.activPriceBuy).toFixed(2))
                case 'usd': return (propss.kolichestvoValuti)
                case 'eur': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'gbp': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'chf': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'rub': return (item.kodpara.split('_')[2] === 'buy' ? (propss.kolichestvoValuti * propss.kursibanki[27].price).toFixed(2) : (propss.kolichestvoValuti * propss.kursibanki[26].price).toFixed(2))
                case 'uah': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'pln': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'czk': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'kzt': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'cny': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                default:
            }
                break;

            case 'eur': switch (item.kodval) {

                case 'byn': return ((propss.kolichestvoValuti * propss.activPriceBuy).toFixed(2))
                case 'usd': return (item.kodpara.split('_')[2] === 'buy' ? (propss.kolichestvoValuti * propss.kursibanki[23].price).toFixed(2) : (propss.kolichestvoValuti * propss.kursibanki[22].price).toFixed(2))
                case 'eur': return (propss.kolichestvoValuti)
                case 'gbp': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'chf': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'rub': return (item.kodpara.split('_')[2] === 'buy' ? (propss.kolichestvoValuti * propss.kursibanki[25].price).toFixed(2) : (propss.kolichestvoValuti * propss.kursibanki[24].price).toFixed(2))
                case 'uah': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'pln': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'czk': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'kzt': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'cny': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                default:
            }
                break;

            case 'gbp': switch (item.kodval) {

                case 'byn': return ((propss.kolichestvoValuti * propss.activPriceBuy).toFixed(2))
                case 'usd': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'eur': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'gbp': return (propss.kolichestvoValuti)
                case 'chf': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'rub': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'uah': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'pln': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'czk': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'kzt': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'cny': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                default:
            }
                break;

            case 'chf': switch (item.kodval) {

                case 'byn': return ((propss.kolichestvoValuti * propss.activPriceBuy).toFixed(2))
                case 'usd': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'eur': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'gbp': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'chf': return (propss.kolichestvoValuti)
                case 'rub': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'uah': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'pln': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'czk': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'kzt': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'cny': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                default:
            }
                break;

            case 'rub': switch (item.kodval) {

                case 'byn': return ((propss.kolichestvoValuti * propss.activPriceBuy).toFixed(2))
                case 'usd': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'eur': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'gbp': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'chf': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'rub': return (propss.kolichestvoValuti)
                case 'uah': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'pln': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'czk': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'kzt': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'cny': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                default:
            }
                break;

            case 'uah': switch (item.kodval) {

                case 'byn': return ((propss.kolichestvoValuti * propss.activPriceBuy).toFixed(2))
                case 'usd': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'eur': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'gbp': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'chf': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'rub': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'uah': return (propss.kolichestvoValuti)
                case 'pln': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'czk': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'kzt': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'cny': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                default:
            }
                break;

            case 'pln': switch (item.kodval) {

                case 'byn': return ((propss.kolichestvoValuti * propss.activPriceBuy).toFixed(2))
                case 'usd': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'eur': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'gbp': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'chf': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'rub': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'uah': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'pln': return (propss.kolichestvoValuti)
                case 'czk': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'kzt': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'cny': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                default:
            }
                break;

            case 'czk': switch (item.kodval) {

                case 'byn': return ((propss.kolichestvoValuti * propss.activPriceBuy).toFixed(2))
                case 'usd': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'eur': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'gbp': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'chf': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'rub': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'uah': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'pln': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'czk': return (propss.kolichestvoValuti)
                case 'kzt': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'cny': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                default:
            }
                break;

            case 'kzt': switch (item.kodval) {

                case 'byn': return ((propss.kolichestvoValuti * propss.activPriceBuy).toFixed(2))
                case 'usd': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'eur': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'gbp': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'chf': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'rub': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'uah': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'pln': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'czk': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'kzt': return (propss.kolichestvoValuti)
                case 'cny': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                default:
            }
                break;

            case 'cny': switch (item.kodval) {

                case 'byn': return ((propss.kolichestvoValuti * propss.activPriceBuy).toFixed(2))
                case 'usd': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'eur': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'gbp': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'chf': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'rub': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'uah': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'pln': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'czk': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'kzt': return ((propss.kolichestvoValuti * propss.activPriceBuy / item.price).toFixed(2))
                case 'cny': return (propss.kolichestvoValuti)
                default:
            }
                break;

            default:
        }
    }
export default calculationPairRate;
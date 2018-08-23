import React, { Component } from 'react';

class BlokValut extends Component {


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

    render() {
        let { item } = this.props;
        
        return (
            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 block1"
                key={item.id}
                data-value={item.kodval}
                onClick={this.props.handleFilterChage} >
                <div className="input-group input-group-sm mb-3">

                    <span className="form-control valuta"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        key={item.kodval}

                    >{item.price * this.props.kolichestvoValuti}</span>

                    <img src={'/flags/' + item.kodval + '.png'} className="imgStr" alt={item.name} title={item.name} />
                </div>
                <ul>
                    {this.viborkaBanks(item.banks).map((item) => {
                        return (<li key={item}>
                            <a href="#" className="badge badge-light">{item}</a>
                        </li>)
                    })
                    }


                </ul>

            </div>
        )
    }

}
export default BlokValut;
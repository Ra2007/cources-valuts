import React, { Component } from 'react';
import BlokValutActive from './blokValutActive';
import BlokValut from './blokValut';
 import './listValut.css';





class ListValut extends Component {
    constructor(props) {
        super();  
       
        
    }

    

    handleFilterChage = (e) => {
        
        this.props.onFilterChanged(e.currentTarget.dataset.value);
    }

    handleCheckBox = (e) => {
        // const kurs = [...this.props.kurs];
        // kurs.status = !kurs.status;
        // this.props.handleStatus(e.currentTarget);
        this.props.handleStatus(e.currentTarget.dataset.value)
    }

    handleSetKolvo1 = (e) => {
        this.props.handleSetKolvo(e.currentTarget.value)
    }

    izmenenieKP = (classBtn) => {
        this.props.izmenenieKParrent(classBtn);
    }

    blkVltAkt = (prm) => {
        return <BlokValutActive 
        item={this.props.kursibanki[prm]}
        buystatus={this.props.buystatus}
        kolichestvoValuti={this.props.kolichestvoValuti}
        handleSetKolvo1={this.handleSetKolvo1 }
        izmenenieKP={this.izmenenieKP}
    />
    }

    blkVlt = (prm) => {
        return <BlokValut
            item={this.props.kursibanki[prm]}
            buystatus={this.props.buystatus}
            kolichestvoValuti={this.props.kolichestvoValuti}                    
            handleFilterChage={this.handleFilterChage}
        />
    }

   
    render() {
        switch(this.props.filter) {

            case 'byn' :  if (this.props.buystatus === 'buy'){
                return (<div className="contValuta">
                         <div className="row">  
                {this.blkVltAkt(1)}
                {this.blkVlt(3)}
                {this.blkVlt(5)}
                {this.blkVlt(7)}
                {this.blkVlt(9)}
                {this.blkVlt(11)}
                {this.blkVlt(13)}
                {this.blkVlt(15)}
                {this.blkVlt(17)}
                {this.blkVlt(19)}
                {this.blkVlt(21)}
                </div>
                         </div>
            )
    
    
            } else {
                return (<div className="contValuta">
                         <div className="row">  
                {this.blkVltAkt(0)}
                {this.blkVlt(2)}
                {this.blkVlt(4)}
                {this.blkVlt(6)}
                {this.blkVlt(8)}
                {this.blkVlt(10)}
                {this.blkVlt(12)}
                {this.blkVlt(14)}
                {this.blkVlt(16)}
                {this.blkVlt(18)}
                {this.blkVlt(20)}
                </div>
                         </div>
            )
    
    
            }
            break;

            case 'usd' :  if (this.props.buystatus === 'buy'){
                return (<div className="contValuta">
                         <div className="row">  
                {this.blkVlt(1)}
                {this.blkVltAkt(3)}
                {this.blkVlt(5)}
                {this.blkVlt(7)}
                {this.blkVlt(9)}
                {this.blkVlt(11)}
                {this.blkVlt(13)}
                {this.blkVlt(15)}
                {this.blkVlt(17)}
                {this.blkVlt(19)}
                {this.blkVlt(21)}
                </div>
                         </div>
            )
    
    
            } else {
                return (<div className="contValuta">
                         <div className="row">  
                {this.blkVlt(0)}
                {this.blkVltAkt(2)}
                {this.blkVlt(4)}
                {this.blkVlt(6)}
                {this.blkVlt(8)}
                {this.blkVlt(10)}
                {this.blkVlt(12)}
                {this.blkVlt(14)}
                {this.blkVlt(16)}
                {this.blkVlt(18)}
                {this.blkVlt(20)}
                </div>
                         </div>
            )
    
    
            }
            break;


        }

        


       
       


        // switch(this.props.filter) {
        //     case 'byn': this.props.buystatus == 'buy' ?  
        //         <div className="contValuta">
        //             <div className="row">  
        //             <BlokValutActive 
        //                 item={this.props.kursibanki[0]}
        //                 buystatus={this.props.buystatus}
        //                 kolichestvoValuti={this.props.kolichestvoValuti}
        //                 handleSetKolvo1={this.handleSetKolvo1 }
        //                 izmenenieKP={this.izmenenieKP}
        //             />
        //              <BlokValut
        //                 item={this.props.kursibanki[11]}
        //                 buystatus={this.props.buystatus}
        //                 kolichestvoValuti={this.props.kolichestvoValuti}                    
        //                 handleFilterChage={this.handleFilterChage}
        //             />
        //             </div>
        //             </div>
        //      : <div className="contValuta">
        //      <div className="row">  
        //      <BlokValutActive 
        //          item={this.props.kursibanki[0]}
        //          buystatus={this.props.buystatus}
        //          kolichestvoValuti={this.props.kolichestvoValuti}
        //          handleSetKolvo1={this.handleSetKolvo1 }
        //          izmenenieKP={this.izmenenieKP}
        //      />
        //       <BlokValut
        //          item={this.props.kursibanki[11]}
        //          buystatus={this.props.buystatus}
        //          kolichestvoValuti={this.props.kolichestvoValuti}                    
        //          handleFilterChage={this.handleFilterChage}
        //      />
        //      </div>
        //      </div>
        //       break;
          
        //       case 'usd':   return (
        //         <div className="contValuta">
        //             <div className="row">  
        //             <BlokValutActive 
        //                 item={this.props.kursibanki[8]}
        //                 buystatus={this.props.buystatus}
        //                 kolichestvoValuti={this.props.kolichestvoValuti}
        //                 handleSetKolvo1={this.handleSetKolvo1 }
        //                 izmenenieKP={this.izmenenieKP}
        //             />
        //              <BlokValut
        //                 item={this.props.kursibanki[9]}
        //                 buystatus={this.props.buystatus}
        //                 kolichestvoValuti={this.props.kolichestvoValuti}                    
        //                 handleFilterChage={this.handleFilterChage}
        //             />
        //             </div>
        //             </div>
        //     );
        //     break;

        //     default:   return (
        //         <div className="contValuta">
        //             <div className="row">  
        //             <BlokValutActive 
        //                 item={this.props.kursibanki[5]}
        //                 buystatus={this.props.buystatus}
        //                 kolichestvoValuti={this.props.kolichestvoValuti}
        //                 handleSetKolvo1={this.handleSetKolvo1 }
        //                 izmenenieKP={this.izmenenieKP}
        //             />
        //              <BlokValut
        //                 item={this.props.kursibanki[16]}
        //                 buystatus={this.props.buystatus}
        //                 kolichestvoValuti={this.props.kolichestvoValuti}                    
        //                 handleFilterChage={this.handleFilterChage}
        //             />
        //             </div>
        //             </div>
        //     )
        //     break;
          

        // return (
        //     <div className="contValuta">
        //         <div className="row">  
        //         <BlokValutActive 
        //             item={this.props.kursibanki[0]}
        //             buystatus={this.props.buystatus}
        //             kolichestvoValuti={this.props.kolichestvoValuti}
        //             handleSetKolvo1={this.handleSetKolvo1 }
        //             izmenenieKP={this.izmenenieKP}
        //         />
        //          <BlokValut
        //             item={this.props.kursibanki[11]}
        //             buystatus={this.props.buystatus}
        //             kolichestvoValuti={this.props.kolichestvoValuti}                    
        //             handleFilterChage={this.handleFilterChage}
        //         />


        //             {/* {
                       
        //                 this.props.kursibanki.map((item) => {


        //                 if (this.props.filter === item.kodval && this.props.buystatus === item.kodpara.split('_')[2]) {
                            
                            
                            
        //                     return (
        //                         <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 block1 active"
        //                             key={item.id}
        //                             data-value={item.kodval}
        //                             onClick={this.handleFilterChage} >

        //                             <div className="input-group input-group-sm mb-3">

        //                                 <input type="text"
        //                                     className="form-control valuta "
        //                                     aria-label="Small"
        //                                     aria-describedby="inputGroup-sizing-sm"
        //                                     key={item.kodval}

        //                                     value={this.props.kolichestvoValuti}
        //                                     onChange={this.handleSetKolvo1}
        //                                 />

        //                                 <img src={'/flags/' + item.kodval + '.png'} className="imgStr" alt={item.name} />
        //                             </div>


        //                         </div>
        //                     )
        //                 } else { 
        //                     if (this.props.filter !== item.kodpara.split('_')[0] && this.props.filter === item.kodpara.split('_')[1] && this.props.buystatus !== item.kodpara.split('_')[2]) {
        //                         return (
        //                             <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 block1"
        //                                 key={item.id}
        //                                 data-value={item.kodval}
        //                                 onClick={this.handleFilterChage} >
        //                                 <div className="input-group input-group-sm mb-3">
    
        //                                     <span className="form-control valuta"
        //                                         aria-label="Small"
        //                                         aria-describedby="inputGroup-sizing-sm"
        //                                         key={item.kodval}
                                                
        //                                     >{item.price * this.props.kolichestvoValuti}</span>
    
        //                                     <img src={'/flags/' + item.kodval + '.png'} className="imgStr" alt={item.name} />
        //                                 </div>
        //                             </div>                      
        //                         )
        //                     }
        //                 }


        //             })}   */}


        //         </div>
        //     </div>
        
    }
}

export default ListValut;
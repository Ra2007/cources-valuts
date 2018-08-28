return (    <div className="contValuta">
<div className="row">     

{ this.props.kursibanki.map((item) => {


if (this.props.filter === item.kodval && this.props.buystatus === item.kodpara.split('_')[2]) {
return (
  <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 block1 active"
      key={item.id}
      data-value={item.kodval}
      onClick={this.handleFilterChage} >

      <div className="input-group input-group-sm mb-3">

          <input type="text"
              className="form-control valuta "
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              key={item.kodval}

              value={this.props.kolichestvoValuti}
              onChange={this.handleSetKolvo1}
          />

          <img src={'/flags/' + item.kodval + '.png'} className="imgStr" alt={item.name} />
      </div>


  </div>
)


} else {
if (this.props.filter !== item.kodpara.split('_')[0] && this.props.filter === item.kodpara.split('_')[1] && this.props.buystatus !== item.kodpara.split('_')[2]) {
  return (
      <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 block1"
          key={item.id}
          data-value={item.kodval}
          onClick={this.handleFilterChage} >
          <div className="input-group input-group-sm mb-3">

              <span className="form-control valuta"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  key={item.kodval}
                  
              >{item.price * this.props.kolichestvoValuti}</span>

              <img src={'/flags/' + item.kodval + '.png'} className="imgStr" alt={item.name} />
          </div>
      </div>                      
  )  }

}

}

)





}     
</div>
</div>

)     







return (    <div className="contValuta">
<div className="row">     

{ this.props.kursibanki.map((item) => { 


if (this.props.filter === item.kodval) { 
if (this.props.buystatus === item.kodpara.split('_')[2]) {
  return(
      <div className={this.props.filter === item.kodpara.split('_')[0] ? "col-sm-2 col-md-2 col-lg-2 col-xl-2 block1 active" : "col-sm-2 col-md-2 col-lg-2 col-xl-2 block1"}
      key={item.id}
      data-value={item.kodval}
      onClick={this.handleFilterChage} >

      <div className="input-group input-group-sm mb-3">

          <input type="text"
              className="form-control valuta "
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              key={item.kodval}

              value={this.props.kolichestvoValuti}
              onChange={this.handleSetKolvo1}
          />

          <img src={'/flags/' + item.kodval + '.png'} className="imgStr" alt={item.name} />
      </div>

      <div className={this.props.buystatus === 'buy' ? 'switch-btn switch-on' : 'switch-btn'} 
onClick={this.izmenenieKP}>{this.props.buystatus === 'buy' ? 'продать' : 'купить'}
</div> 


  </div>
      
  )
}

} else {
if (this.props.buystatus !== item.kodpara.split('_')[2] && item.kodpara.split('_')[1] == 'byn') {
  return(
      <div className={this.props.filter === item.kodpara.split('_')[0] ? "col-sm-2 col-md-2 col-lg-2 col-xl-2 block1 active" : "col-sm-2 col-md-2 col-lg-2 col-xl-2 block1"}
      key={item.id}
      data-value={item.kodval}
      onClick={this.handleFilterChage} >

      <div className="input-group input-group-sm mb-3">

          {/* <input type="text"
              className="form-control valuta "
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              key={item.kodval}

              value={this.props.kolichestvoValuti}
              onChange={this.handleSetKolvo1}
          /> */}

          <span className="form-control valuta"
aria-label="Small"
aria-describedby="inputGroup-sizing-sm"
key={item.kodval}

>{(this.props.kolichestvoValuti / item.price).toFixed(2)} <br />// {item.kodpara}</span>

          <img src={'/flags/' + item.kodval + '.png'} className="imgStr" alt={item.name} />
      </div>


  </div>

  )
}

} 
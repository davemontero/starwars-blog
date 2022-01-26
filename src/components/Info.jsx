const Info = (props) => {
  return(
    <div className="card mb-3" style={{border: 'none'}} >
      <div className="row g-0">
        <div className="col-md-4">
          <img 
            src={props.img} 
            className="img-fluid" 
            alt={props.name}
            style={{height: '400px', objectFit: 'cover'}} 
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{props.name}</h2>
            {props.properties.map((el,i) => <p className="card-text" key={i}><b>{el[0]}</b>: {el[1]}</p>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
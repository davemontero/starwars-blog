import { Link } from "react-router-dom"

const Card = (props) => {
  
  return(
    <div className={`col`} >
      <Link to={props.link}>
        <div className="card h-100" style={{height: "400px"}}>
          <img 
            src={props.img} 
            className="card-img-top" 
            alt={props.title} 
            style={{height: "200px", objectFit: 'cover'}}
            onError={({ currentTarget }) => {
              currentTarget.onerror = 'null'
              currentTarget.src = '../img/big-placeholder.jpg'
            }}
          />
          <div className="card-body">
            <h5 className="card-title" style={{textTransform: "capitalize"}}>{props.title}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card
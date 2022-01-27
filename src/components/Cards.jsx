import { Link } from "react-router-dom"
import { BsHeart } from 'react-icons/bs'

const Card = (props) => {
  
  return(
    <div className={`col`} >
        <div className="card h-100" style={{height: "400px"}}>
        <Link to={props.link}>
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
          </Link>
          <div className="card-body d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0" style={{textTransform: "capitalize"}}>{props.title}</h5>
            {
              props.type && (
                <button className="btn btn-light" style={{ zIndex: 1000}}>
                  <BsHeart />
                </button>
              )
            }
          </div>
        </div>
      
    </div>
  )
}

export default Card
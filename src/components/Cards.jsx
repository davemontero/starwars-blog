import { Link } from "react-router-dom"
import { useContext } from "react"
import { BsHeartFill } from 'react-icons/bs'
import '../styles/Cards.css'
import { useState } from "react"
import { Context } from "../store/appContext"


const Card = (props) => {
  const { store, actions } = useContext(Context);
  const [active, setActive] = useState(false)

  const handleClick = (name,id) => {
  }
  console.log(store.favorites)
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
                !active ? (
                <button className="btn favorite-btn" onClick={handleClick(props.title)}>
                  <BsHeartFill className="favorite-icon" />
                </button>
                ) : (
                  <button className="btn favorite-btn favorite-btn-active" onClick={handleClick}>
                    <BsHeartFill className="favorite-icon favorite-active" />
                  </button>
                )
              )
            }
          </div>
        </div>
      
    </div>
  )
}

export default Card
import { useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import Info from '../components/Info'
import { Context } from "../store/appContext"

const Details = () => {
  const { store, actions } = useContext(Context);
  let { type, uid } = useParams()

  useEffect(() => {
    actions.getDetails(type, uid)
  }, [])

  return(
    <div className="container">
      { store.details.message ? (
        <Info 
        img={`../../img/${type}/${uid}.jpg`}
        name={store.details.result.properties.name}
        properties={Object.entries(store.details.result.properties).filter(el => el[0] != 'created' && el[0] != 'edited' && el[0] != 'name' && el[0] != 'url' && el[0] != 'homeworld' && el[0] != 'people' && el[0] != 'pilots')}
      />
      ) : 'Cargando...' }
    </div>
  )
}

export default Details
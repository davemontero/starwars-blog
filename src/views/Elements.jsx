import { useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import Card from '../components/Cards'
import { Context } from "../store/appContext"

const Elements = () => {
  const { store, actions } = useContext(Context);
  let { type } = useParams()

  useEffect(() => {
    actions.obtenerResults(type)
  }, [type])

  return(
    <div className="container">
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
        { 
          store.results.message
          ? store.results.results.map(el => <Card title={el.name} key={el.uid} type={type} img={`../img/${type}/${el.uid}.jpg`} link={`/details/${type}/${el.uid}`}/>) 
          : 'Cargando...'
        }
      </div>
    </div>
  )
}

export default Elements
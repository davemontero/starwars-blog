import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from '../components/Cards'

const Elements = () => {
  const [query, setQuery] = useState({})
  let { type } = useParams()

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${type}`)
    .then(response => response.json())
    .then(data => setQuery(data))
    return () => setQuery({})
  }, [type])

  return(
    <div className="container">
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
        { 
          query.message
          ? query.results.map(el => <Card title={el.name} key={el.uid} type={type} img={`../img/${type}/${el.uid}.jpg`} link={`/details/${type}/${el.uid}`}/>) 
          : 'Cargando...'
        }
      </div>
    </div>
  )
}

export default Elements
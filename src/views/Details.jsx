import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Info from '../components/Info'

const Details = () => {
  const [data,setData] = useState({})
  let { type, uid } = useParams()
  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${type}/${uid}`)
    .then(response => response.json())
    .then(data => setData(data))
  }, [])

  return(
    <div className="container">
      { data.message ? (
        <Info 
        img={`../../img/${type}/${uid}.jpg`}
        name={data.result.properties.name}
        properties={Object.entries(data.result.properties).filter(el => el[0] != 'created' && el[0] != 'edited' && el[0] != 'name' && el[0] != 'url' && el[0] != 'homeworld' && el[0] != 'people' && el[0] != 'pilots')}
      />
      ) : 'Cargando...' }
    </div>
  )
}

export default Details
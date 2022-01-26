import { useState, useEffect } from "react"
import Card from '../components/Cards'

const Home = () => {
  const [data, setData] = useState({})
  
  useEffect(() => {
    fetch(`https://www.swapi.tech/api/`)
    .then(response => response.json())
    .then(data => setData(data))
  }, [])

  return(
    <div className="container">
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
        { data.message ? Object.entries(data.result).filter(el => el[0] != 'films').map((el,i) => <Card title={el[0]} key={i} type={el[0]} img={`./img/categories/${el[0]}.jpg`} link={`/elements/${el[0]}`}/>) : 'Cargando...' }
      </div>
    </div>
  )
}

export default Home
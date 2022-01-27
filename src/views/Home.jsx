import { useEffect, useContext } from "react"
import Card from '../components/Cards'
import { Context } from "../store/appContext"

const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getCategories()
  }, [])

  return(
    <div className="container">
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
        { store.categories.message ? Object.entries(store.categories.result).filter(el => el[0] != 'films').map((el,i) => <Card title={el[0]} key={i} type={el[0]} img={`./img/categories/${el[0]}.jpg`} link={`/elements/${el[0]}`}/>) : 'Cargando...' }
      </div>
    </div>
  )
}

export default Home

import './App.css'
import BotonScroll from './componentes/BotonScroll'
import ItemListContainer from './componentes/ItemListContainer'

function App() {

  return (
    <>
      <h1 className='titulo init'>APP PRODUCTOS</h1>
      <div className="row">

        <ItemListContainer />

      </div>

      <BotonScroll/>

      <footer className="footer"> Juamaya 📀 2023 </footer>
    </>
  )
}

export default App

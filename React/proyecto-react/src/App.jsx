
import './App.css'
import Educacion from './components/Educacion'
import Experiencia from './components/Experiencia'
import MiComponente from './components/MiComponente'

function App() {


  return (
    <>
      <MiComponente />
      <header>
        <h1>Mi Curriculum Vitae</h1>
      </header>
      <section>
        <Experiencia />
        <Educacion />
        {/* <Timelapse /> */}
      </section>
    </>
  )
}

export default App

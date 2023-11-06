import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/shared/Header/Header'
import Footer from './components/shared/Footer/Footer'

function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App

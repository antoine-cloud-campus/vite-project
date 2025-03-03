import './App.css'
import Footer from './components/Footer'
import Header from './components/header'
import Dish from './components/Dish'

const dishes = [
  {
    title: "Tacos à l’unité",
    price: 3,
    img: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
  },
  {
    title: "Enchiladas",
    price: 12,
    img: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
  },
  {
    title: "Mole poblano",
    price: 15,
    img: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
  }
]

function App() {

  return (
    <>
      <Header />
      <Dish dish={dishes[0]}/>
      <Dish dish={dishes[1]}/>
      <Dish dish={dishes[2]}/>
      <Footer />
    </>
  )
}

export default App

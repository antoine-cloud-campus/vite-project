import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Dish from './components/Dish/Dish'
import { Container, Row, Col } from 'react-bootstrap'
import './App.scss'

function App() {

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col md={4}>
            <Dish title={"Tacos à l’unité"} price={3} img={"https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"} />
          </Col>
          <Col md={4}>
            <Dish title={"Enchiladas"} price={12} img={"https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"} />
          </Col>
          <Col md={4}>
            <Dish title={"Mole poblano"} price={15} img={"https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default App

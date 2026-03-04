import { Container } from 'react-bootstrap'
import Header from '../сomponents/Header'

// Здесь будет главная страница чата 
const HomePage = () => (
  <Container fluid className='d-flex flex-column h-100 p-0'>
    <Header />
    <p className='text-muted'>test home page</p>
  </Container>
)

export default HomePage

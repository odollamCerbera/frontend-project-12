import { Container } from 'react-bootstrap'
import ChatHome from '../components/Chat/ChatHome'
import Header from '../components/Header'

// Здесь будет главная страница чата 
const HomePage = () => (
  <Container fluid className='d-flex flex-column h-100 p-0'>
    <Header />
    <ChatHome />
  </Container>
)

export default HomePage

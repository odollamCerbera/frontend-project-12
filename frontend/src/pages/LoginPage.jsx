import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import LoginCard from '../components/Login/LoginCard'

const LoginPage = () => (
  <Container fluid className='d-flex flex-column h-100 p-0'>
    <Header />
    <LoginCard />
  </Container>
)

export default LoginPage

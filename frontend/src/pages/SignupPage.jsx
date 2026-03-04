import { Container } from 'react-bootstrap'
import Header from '../components/Header'

// Здесь будет страница регистрации
const SignupPage = () => (
  <Container fluid className='d-flex flex-column h-100 p-0'>
    <Header />
    <p className='text-muted'>test signup page</p>
  </Container>
)

export default SignupPage

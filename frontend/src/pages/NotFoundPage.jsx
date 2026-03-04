import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import NotFound from '../components/NotFound'

const NotFoundPage = () => (
  <Container fluid className='d-flex flex-column h-100 p-0'>
    <Header />
    <NotFound />
  </Container>
)

export default NotFoundPage

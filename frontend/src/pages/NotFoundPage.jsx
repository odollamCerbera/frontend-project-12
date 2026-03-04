import { Container } from 'react-bootstrap'
import Header from '../сomponents/Header'
import NotFound from '../сomponents/NotFound'

const NotFoundPage = () => (
  <Container fluid className='d-flex flex-column h-100 p-0'>
    <Header />
    <NotFound />
  </Container>
)

export default NotFoundPage

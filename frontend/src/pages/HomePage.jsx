import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Header from '../сomponents/Header'

// Здесь будет главная страница чата 
const HomePage = () => {
  const { t } = useTranslation()

  return (
    <Container fluid className='d-flex flex-column vh-100 p-0'>
      <Header />

      <Container className='text-center'>
        <p className='text-muted'>test</p>
      </Container>
    </Container>
  )
}

export default HomePage

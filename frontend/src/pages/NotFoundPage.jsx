import { useTranslation } from 'react-i18next'
import imageNotFound from '../assets/404-NotFoundPage.svg'
import { Container, Navbar, Image } from 'react-bootstrap'

const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <Container fluid className='d-flex flex-column vh-100 p-0'>
      <Navbar bg='white' variant='light' expand='lg' className='shadow-sm'>
        <Container>
          <Navbar.Brand href='/'>{t('logo')}</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className='text-center'>
        <Image fluid alt={t('notFoundPage.pageNotFound')} className='h-25 mb-4' src={imageNotFound} />
        <h1 className='h4 text-muted'>{t('notFoundPage.pageNotFound')}</h1>
        <p className='text-muted'>{t('notFoundPage.youCanGo')} <a href='/'>{t('notFoundPage.toMainPage')}</a></p>
      </Container>
    </Container>
  )
}

export default NotFoundPage

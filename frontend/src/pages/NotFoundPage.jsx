import { Container, Image } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import imageNotFound from '../assets/404-NotFoundPage.svg'
import Header from '../сomponents/Header'

const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <Container fluid className='d-flex flex-column vh-100 p-0'>
      <Header />
      <Container className='text-center'>
        <Image fluid alt={t('notFoundPage.pageNotFound')} className='h-25 mb-4' src={imageNotFound} />
        <h1 className='h4 text-muted'>{t('notFoundPage.pageNotFound')}</h1>
        <p className='text-muted'>{t('notFoundPage.suggestAction')} <a href='/'>{t('notFoundPage.mainPage')}</a></p>
      </Container>
    </Container>
  )
}

export default NotFoundPage

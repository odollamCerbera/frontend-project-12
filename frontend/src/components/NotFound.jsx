import { Container, Image } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import imageNotFound from '../assets/404-NotFoundPage.svg'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <Container className='text-center'>
      <Image fluid alt={t('notFoundPage.pageNotFound')} className='h-25 mb-4' src={imageNotFound} />
      <h1 className='h4 text-muted'>{t('notFoundPage.pageNotFound')}</h1>
      <p className='text-muted'>{t('notFoundPage.suggestAction')} <a href='/'>{t('notFoundPage.mainPage')}</a></p>
    </Container>
  )
}

export default NotFound

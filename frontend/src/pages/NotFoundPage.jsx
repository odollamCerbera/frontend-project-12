import { useTranslation } from 'react-i18next'
import imageNotFound from '../assets/404-NotFoundPage.svg'

const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
    <div className='h-100'>
      <div className='h-100' id='chat'>
        <div className='d-flex flex-column h-100'>
          <nav className='shadow-sm navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
              <a className='navbar-brand' href='/'>{t('navigation.title')}</a>
            </div>
          </nav>
          <div className='text-center'>
            <img alt={t('notFoundPage.pageNotFound')} className='img-fluid h-25' src={imageNotFound} />
            <h1 className='h-4 text-muted'>{t('notFoundPage.pageNotFound')}</h1>
            <p class='text-muted'>{t('notFoundPage.youCanGo')} <a href='/'>{t('notFoundPage.toMainPage')}</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage

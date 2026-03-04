import { Button, Navbar } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

// Здесь реализовать проверку на авторизацию для кнопки выхода (нужно отображать только в том случае, если пользователь уже авторизован)
const Header = () => {
  const { t } = useTranslation()

  return (
    <Navbar bg='white' variant='light' expand='lg' className='shadow-sm'>
      <div className='container'>
        <Navbar.Brand as={Link} to='/'>{t('logo')}</Navbar.Brand>
        <Button as={Link} to='/login' className='btn btn-primary'>{t('authorization.logout')}</Button>
      </div>
    </Navbar>
  )
}

export default Header

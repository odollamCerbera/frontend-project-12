import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Header = ({ children }) => {
  const { t } = useTranslation()

  return (
    <Navbar bg='white' variant='light' expand='lg' className='shadow-sm'>
      <Container>
        <Navbar.Brand as={Link} to="/">{t('logo')}</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header

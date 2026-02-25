import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
import avatarLoginPage from '../assets/avatar-LoginPage.jpg'
import AuthorizationForm from '../componets/authorizationForm.jsx'
import { Link } from 'react-router-dom'
import {
  Container,
  Navbar,
  Row,
  Col,
  Card,
  Image,
} from 'react-bootstrap'

const LoginPage = () => {
  const { t } = useTranslation()

  return (
    <Container fluid className='d-flex flex-column h-100 p-0' id='chat'>

      <Navbar bg='light' expand='lg' className='shadow-sm'>
        <Container>
          <Navbar.Brand href='/'>{t('logo')}</Navbar.Brand>
        </Container>
      </Navbar>

      <Container fluid className='h-100'>
        <Row className='justify-content-center align-content-center h-100'>
          <Col xs={12} md={8} xxl={6}>
            <Card className='shadow-sm'>
              <Card.Body className='row p-5'>

                <Col xs={12} md={6} className='d-flex align-items-center justify-content-center'>
                  <Image src={avatarLoginPage} className='rounded-circle' alt={t('authorization.login')} />
                </Col>

                <AuthorizationForm />

                <Card.Footer className='p-4'>
                  <div className='text-center'>
                    <span className='me-1'>{t('loginPage.noAccount')}</span>
                    <Link to='/signup'>{t('authorization.signup')}</Link>
                  </div>
                </Card.Footer>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default LoginPage

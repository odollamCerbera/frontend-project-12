import { useTranslation } from 'react-i18next'
import { Formik, Form, Field } from 'formik'
import { Col } from 'react-bootstrap'

const AuthorizationForm = () => {
  const { t } = useTranslation()

  return (
    <Formik initialValues={{ username: '', password: '' }}>
      {() => (
        <Col xs={12} md={6} className='mt-3 mt-md-0'>
          <Form>
            <h1 className='text-center mb-4'>{t('authorization.login')}</h1>

            <div className='form-floating mb-3'>
              <label htmlFor='username'>{t('loginPage.login')}</label>
              <Field
                type='usermane'
                name='username'
                className='form-control'
                required=''
                placeholder={t('loginPage.login')}
                id='username'
                value=''
              />
            </div>

            <div className='form-floating mb-4'>
              <label htmlFor='password' className='form-label'>{t('loginPage.password')}</label>
              <Field
                type='password'
                name='password'
                className='form-control'
                required=''
                placeholder={t('loginPage.password')}
                id='password'
                value=''>
              </Field>
            </div>

            <button type='submit' className='w-100 mb-3 btn btn-outline-primary'>{t('authorization.login')}</button>
          </Form>
        </Col>
      )}
    </Formik>
  )
}

export default AuthorizationForm

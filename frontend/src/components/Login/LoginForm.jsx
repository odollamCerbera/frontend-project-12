import { Formik } from 'formik'
import { Alert, Button, Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../features/auth/authSlice.js'
import { getLoginSchema } from '../../features/auth/validators.js'
import LoginFormField from './LoginFormField'

const LoginForm = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error } = useSelector((state) => state.auth)

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={getLoginSchema(t)}
      onSubmit={async (values) => {
        const result = await dispatch(login(values))
        if (login.fulfilled.match(result)) navigate('/')
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <h1 className='text-center mb-4'>{t('authorization.login')}</h1>

          <LoginFormField
            name='username'
            label={t('loginPage.login')}
            type='text'
          />

          <LoginFormField
            name='password'
            label={t('loginPage.password')}
            type='password'
          />

          {/* Вывод системной ошибки отдельным блоком при наличии */}
          {error && (
            <Alert variant='danger'>
              {t(error)}
            </Alert>
          )}

          <Button type='submit' className='w-100 mb-3' disabled={loading}>
            {t('authorization.login')}
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm

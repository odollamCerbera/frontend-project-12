import { useFormik } from 'formik'
import { Alert, Button, FloatingLabel, Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from './authSlice'
import { getLoginSchema } from './validators.js'

const AuthorizationForm = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error } = useSelector((state) => state.auth) // Получаем состояние загрузки и ошибку из Redux

  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: getLoginSchema(t),
    onSubmit: async (values) => {
      const result = await dispatch(login(values))
      if (login.fulfilled.match(result)) navigate('/')
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h1 className='text-center mb-4'>{t('authorization.login')}</h1>

      {/* Поле login */}
      <FloatingLabel
        controlId='username'
        label={t('loginPage.login')}
        className='mb-3'
      >
        <Form.Control
          {...formik.getFieldProps('username')}
          type='text'
          placeholder={t('loginPage.login')}
          isInvalid={formik.touched.username && !!formik.errors.username}
        />

        <Form.Control.Feedback type='invalid'>
          {formik.errors.username}
        </Form.Control.Feedback>
      </FloatingLabel>

      {/* Поле password */}
      <FloatingLabel
        controlId='password'
        label={t('loginPage.password')}
        className='mb-3'
      >
        <Form.Control
          {...formik.getFieldProps('password')}
          type='password'
          placeholder={t('loginPage.password')}
          isInvalid={formik.touched.password && !!formik.errors.password}
        />

        <Form.Control.Feedback type='invalid'>
          {formik.errors.password}
        </Form.Control.Feedback>
      </FloatingLabel>

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
  )
}

export default AuthorizationForm

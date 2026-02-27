import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import { Button, Form, FloatingLabel, Alert } from 'react-bootstrap'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// Вынести функцию из этого файла для повторного использования на странице регистрации
const getLoginSchema = (t) => yup.object({
  username: yup
    .string()
    .min(3, t('errors.validation.invalidRange'))
    .max(20, t('errors.validation.invalidRange'))
    .required(t('errors.validation.requiredField')),
  password: yup
    .string()
    .min(5, t('errors.validation.minLength')) // Исправить на 6 (для тестирования password: admin - всего 5 символов)
    .required(t('errors.validation.requiredField'))
})

const AuthorizationForm = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: getLoginSchema(t),
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        const response = await axios.post('/api/v1/login', values)
        localStorage.setItem('token', JSON.stringify(response.data))
        navigate('/')
      } catch (error) {
        setSubmitting(false)
        switch (error.response?.status) {
          case 401: setErrors({ auth: t('errors.system.invalidData') })
            break
          case 500: setErrors({ auth: t('errors.system.serverError') })
            break
          case 0: setErrors({ auth: t('errors.system.connection') })
            break
          default: setErrors({ auth: t('errors.system.unknown') })
        }
      }
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
      {formik.errors.auth && (
        <Alert variant='danger'>
          {formik.errors.auth}
        </Alert>
      )}

      <Button type='submit' className='w-100 mb-3'>
        {t('authorization.login')}
      </Button>
    </Form>
  )
}

export default AuthorizationForm

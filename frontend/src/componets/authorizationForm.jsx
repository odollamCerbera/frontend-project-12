import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import { Button, Form, FloatingLabel } from 'react-bootstrap'
import * as yup from 'yup'

const getLoginSchema = (t) => yup.object({
  username: yup
    .string()
    .min(3, t('errors.from3To20Characters'))
    .max(20, t('errors.from3To20Characters'))
    .required(t('errors.requiredField')),
  password: yup
    .string()
    .min(5, t('errors.atLeast6Characters')) // Исправить на 6 (для тестирования password: admin - всего 5 символов)
    .required(t('errors.requiredField'))
})

const AuthorizationForm = () => {
  const { t } = useTranslation()

  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: getLoginSchema(t),
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        const response = await axios.post('/api/v1/login', values)
        // Здесь от сервера должен быть токен
        console.log(response.data)
      } catch (error) {
        if (error.response?.status === 401) {
          setErrors({
            username: t('errors.isInvalidUsernameOrPassword'),
            password: t('errors.isInvalidUsernameOrPassword'),
          })
        }
      } finally {
        setSubmitting(false)
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

      <Button type='submit' className='w-100 mb-3'>
        {t('authorization.login')}
      </Button>
    </Form>
  )
}

export default AuthorizationForm

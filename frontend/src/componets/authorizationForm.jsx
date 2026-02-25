import { useTranslation } from 'react-i18next'
import { Button, Form, FloatingLabel } from 'react-bootstrap'
import { useFormik } from 'formik'

const AuthorizationForm = () => {
  const { t } = useTranslation()

  const formik = useFormik({
    initialValues: { username: '', password: '' },
    onSubmit: values => { console.log(values) }
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
          name='username'
          type='text'
          placeholder={t('loginPage.login')}
          isInvalid={formik.touched.username && !!formik.errors.username}
          {...formik.getFieldProps('username')}
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
          name='password'
          type='password'
          placeholder={t('loginPage.password')}
          isInvalid={formik.touched.password && !!formik.errors.password}
          {...formik.getFieldProps('password')}
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

import * as yup from 'yup'

export const getLoginSchema = (t) => yup.object({
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

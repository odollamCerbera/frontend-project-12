import { Button, Form, InputGroup } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { TbSquareArrowRight } from 'react-icons/tb'

// Пофиксить автофокус
// Здесь нужно реализовать отправку сообщений по клику
const ChatForm = () => {
  const { t } = useTranslation()

  return (
    < div className='mt-auto px-5 py-3' >
      <Form noValidate className='py-1 border rounded-2'>
        <InputGroup hasValidation>
          <Form.Control
            name='body'
            aria-label={t('messages.newMessage')}
            placeholder={t('messages.newMessage')}
            className='border-0 p-0 ps-2'
            defaultValue=''
            autoFocus
          />

          <Button type='submit' variant='outline-secondary' className='btn-group-vertical'>
            <TbSquareArrowRight size={25} strokeWidth={1} />
            <span className='visually-hidden'>{t('messages.send')}</span>
          </Button>
        </InputGroup>
      </Form>
    </div >
  )
}

export default ChatForm

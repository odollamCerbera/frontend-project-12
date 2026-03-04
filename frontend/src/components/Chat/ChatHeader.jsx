import { useState } from 'react'
import { useTranslation } from 'react-i18next'

// Здесь нужно реализовать отображение названия актуального канала и кол-во сообщений в чате
const ChatHeader = () => {
  const { t } = useTranslation()
  // Для изменения текста на панели отображения количества сообщений
  const [messagesCount, setMessagesCount] = useState(0)

  return (
    <div className='bg-light mb-4 p-3 shadow-sm small'>
      <p className='m-0'>
        <b># {/* Заголовок текущего канала - дефолтный general */}</b>
      </p>
      <span className='text-muted'>{t('messages.counter.count', { count: messagesCount })}</span>
    </div>
  )
}

export default ChatHeader

import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { TbSquarePlus } from 'react-icons/tb'

// Здесь нужно реализовать добавление каналов при клике на кнопку
const ChannelsNavigationHeader = () => {
  const { t } = useTranslation()

  return (
    <div className='d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4'>
      <b>{t('channels.channels')}</b>
      <Button variant='link' className='p-0 text-primary btn-group-vertical'>
        <TbSquarePlus size={25} strokeWidth={1} />
        <span className='visually-hidden'>{t('channels.createChannel')}</span>
      </Button>
    </div>
  )
}

export default ChannelsNavigationHeader

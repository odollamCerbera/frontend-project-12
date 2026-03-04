import { Button, Nav } from 'react-bootstrap'

// Здесь нужно будет отображать новые каналы, реализовать переключение, удаление, переименование 
const ChannelsNavigation = () => {

  return (
    <Nav
      id='channels-box'
      className='flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block'
      variant='pills'
    >
      <Nav.Item className='w-100'>
        <Button variant='light' className='w-100 rounded-0 text-start'>
          <span className='me-1'>#</span>general
        </Button>
      </Nav.Item>

      <Nav.Item className='w-100'>
        <Button variant='light' className='w-100 rounded-0 text-start'>
          <span className='me-1'>#</span>random
        </Button>
      </Nav.Item>

    </Nav>
  )
}

export default ChannelsNavigation

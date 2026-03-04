import { Container, Row, Col } from 'react-bootstrap'
import AddChannelHeader from './AddChannelHeader'
import ChannelsNavigation from './ChannelsNavigation'
import ChatHeader from './ChatHeader'
import ChatHistory from './ChatHistory'
import ChatForm from './ChatForm'

const ChatHome = () => {

  return (
    <Container className='h-100 my-4 overflow-hidden rounded shadow'>
      <Row className='h-100 bg-white flex-md-row'>
        <Col xs={4} md={2} className='border-end px-0 bg-light flex-column h-100 d-flex'>
          <AddChannelHeader />
          <ChannelsNavigation />
        </Col>

        <Col className='p-0 h-100'>
          <div className='d-flex flex-column h-100'>
            <ChatHeader />
            <ChatHistory />
            <ChatForm />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ChatHome

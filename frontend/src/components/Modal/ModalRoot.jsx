import { closeModal } from '@slices/modalSlice'
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import AddChannelModal from './AddChannelModal'
import RemoveChannelModal from './RemoveChannelModal'
import RenameChannelModal from './RenameChannelModal'

const mapping = {
  addChannel: AddChannelModal,
  removeChannel: RemoveChannelModal,
  renameChannel: RenameChannelModal,
}

const ModalRoot = () => {
  const { isOpen, type } = useSelector(state => state.modal)
  const dispatch = useDispatch()

  if (!isOpen || !type) return null

  const ModalWindow = mapping[type]
  return (
    <Modal restoreFocus={false} show={isOpen} onHide={() => dispatch(closeModal())} centered>
      <ModalWindow />
    </Modal>
  )
}

export default ModalRoot

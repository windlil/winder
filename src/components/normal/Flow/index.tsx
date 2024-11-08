import { FC } from 'react'
import { Modal } from 'antd'
import styles from './index.module.less'
import useOpen from '@/hooks/useOpen'

interface Props {

}

const Flow: FC<Props> = () => {
  const { open, handleOpen, handleCancal } = useOpen()

  return (
    <Modal
      open={true}
      closable={false}
      footer={null}
      style={{ top: 0, left: 0, width: '100%', height: '100%', maxWidth: '100%', margin: 0, padding: 0 }}
    >

    </Modal>
  )
}

export default Flow
import { Modal } from 'antd'

interface Options {
  text: string
  callback: () => void
  type: 'success' | 'warning' | 'error' | 'info'
}

const useConfrim = () => {
  return (options: Options) => {
    const { text, callback, type } = options

    Modal[type]({
      title: '提示',
      content: <div>
        {text}
      </div>,
      onOk: () => {
        callback()
      },
      okText: '确定',
      closable: true,
    })
  }
}

export default useConfrim
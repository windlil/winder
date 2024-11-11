import { FC, forwardRef, useCallback, useImperativeHandle } from 'react'
import { addEdge, Background, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react';
import { Modal } from 'antd'
import styles from './index.module.less'
import useOpen from '@/hooks/useOpen'

import '@xyflow/react/dist/style.css';

interface Props {

}

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
]
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

const Flow: FC<Props> = (props: any, ref: any) => {
  const { open, handleOpen, handleCancal } = useOpen(false)

  useImperativeHandle(ref, () => ({
    handleOpen
  }))

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <Modal 
      title={`事件流编辑`}
      className={`${styles.fullScreenWidth} ${styles.fullScreenStyle}`}
      footer={null}      
      maskClosable={false}
      open={true}
      onCancel={handleCancal}
    >
        <div
          style={{
            height: 'calc(100vh - 72px)',
            width: '100%'
          }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            proOptions={{
              hideAttribution: true
            }}
          >
            <Background gap={12} size={1} />
          </ReactFlow>
        </div>
    </Modal>
  )
}

export default forwardRef(Flow)
import { EventsMap } from "@/schema"
import { createUniid } from "@/schema/createId"
import useComponentsStore from "@/stores/components"
import { Button, Collapse, Dropdown } from "antd"
import { FC, useMemo, useRef } from "react"
import Flow from "@/components/normal/Flow";
import { Trash2 } from "lucide-react"

const FlowSetting: FC = () => {
  const addEvent = useComponentsStore(state => state.addEvent)
  const curComponent = useComponentsStore(state => state.curComponent)!
  const flowRef = useRef<any>(null)

  const items = useMemo(() => {
    const events = EventsMap[curComponent.name].events

    const handleItemClick = (event: any) => {
      addEvent({
        type: event.value,
        id: `${createUniid()}`,
      })
    }

    return events.map((event) => {
      return {
        key: event.value,
        label: <div onClick={() => handleItemClick(event)}>
          {event.label}
        </div>
      }
    })
  }, [curComponent.id])

  const openFlow = () => {
    flowRef.current?.handleOpen()
  }

  const genExtra = () => (
    <Trash2
      className='w-4 h-4 text-neutral-400 hover:text-neutral-500 transition mt-[2px]'
      onClick={(event) => {
        event.stopPropagation();
      }}
    />
  )

  const collapseItems = useMemo(() => {
    if (curComponent?.events?.length) {
      return curComponent.events.map((i => {
        return {
          key: i.id,
          label: i.type,
          children: (
            <div className="flex justify-center items-center">
              <Button size="small" type='primary' onClick={openFlow}>
                编辑事件流
              </Button>
            </div>
          ),
          extra: genExtra()
        }
      }))
    }
  }, [curComponent?.events, curComponent])

  const newLocal = "link";
  return (
    <div>
      <div className="flex justify-center items-center py-2 border-b mb-2">
        <Dropdown menu={{ items }}>
          <Button type={newLocal}>
              添加事件
          </Button>
        </Dropdown>
      </div>
      <div className="px-2">
        <Collapse size='small' bordered={false} items={collapseItems} />
      </div>
    </div>
  )
}

export default FlowSetting
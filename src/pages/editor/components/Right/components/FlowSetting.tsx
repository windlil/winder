import { EventsMap, RenderComponentType } from "@/schema"
import { Button, Dropdown } from "antd"
import { FC, useMemo } from "react"

interface Props {
  curComponent: RenderComponentType
}

const FlowSetting: FC<Props> = (props) => {
  const { curComponent } = props

  const items = useMemo(() => {
    const events = EventsMap[curComponent.name].events

    const handleItemClick = (event: any) => {
      console.log('event:', event)
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

  const collapseItems = useMemo(() => {

  }, [])

  const newLocal = "link";
  return (
    <div>
      <div className="flex justify-center items-center py-2">
        <Dropdown menu={{ items }}>
          <Button type={newLocal}>
              添加事件
          </Button>
        </Dropdown>
      </div>
    </div>
  )
}

export default FlowSetting
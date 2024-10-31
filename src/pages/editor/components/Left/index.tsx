import MaterialItem from "@/components/normal/MaterialItem"
import { MaterialList } from "@/schema"

const Left = () => {
  return (
    <div className="size-full flex flex-col">
      {MaterialList.map((group) => {
        return <div key={group.title} className="w-full p-4">
          <p className=" text-sm text-neutral-600 font-bold mb-2 ml-2">{group.title}</p>
          <div className="flex justify-between flex-wrap">
            {group.children.map(child => {
              return <MaterialItem children={child?.children ?? []} key={child.name} name={child.name} icon={child?.icon} label={child.label} props={child.props}></MaterialItem>
            })}
          </div>
        </div>
      })}
    </div>
  )
}

export default Left
import { useCallback, useState } from "react"

const useOpen = (initial?: boolean) => {
  const [open, setOpen] = useState(initial ?? false)

  const handleOpen = useCallback((callback: any) => {
    setOpen(true)
    callback && typeof callback === 'function' && callback()
  }, [])

  const handleCancal = useCallback((callback: any) => {
    setOpen(false)
    callback && typeof callback === 'function' && callback()
  }, [])

  return {
    open,
    handleOpen,
    handleCancal
  }
}

export default useOpen
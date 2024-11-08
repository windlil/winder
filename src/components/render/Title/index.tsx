import { createElement, CSSProperties, useEffect, useMemo, useState } from "react"
import style from './index.module.less'

const Title = (props: any) => {
  const { text, level, underline, fontWeight } = props

  const [tag, setTag] = useState('h1')

  useEffect(() => {
    switch(level) {
      case '1':
        setTag('h1')
        break
      case '2':
        setTag('h2')
        break
      case '3':
        setTag('h3')
        break
      case '4':
        setTag('h4')
        break
      case '5':
        setTag('h5')
        break
      default:
        setTag('h1')
    }
  }, [props])

  const newProps = useMemo(() => {
    const _props = {
      className: `${underline ? 'underline' : ''}`,
      style: {
        fontWeight: fontWeight,
      } as CSSProperties,
      ...props
    }

    return _props
  }, [props])

  return <div className={style.title}>
    {createElement(tag, { ...newProps }, text)}
  </div>
}

export default Title
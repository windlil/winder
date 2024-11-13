import React, { useState } from 'react'
import MonacoEditor from '@monaco-editor/react'
import useComponentsStore from '@/stores/components'
import { validJSON } from '@/utils/validify'

const Code: React.FC = () => {
  const updateComponent = useComponentsStore(state => state.updateComponent)
  const [code, setCode] = useState<string>(
    `""`
  )

  const handleEditorChange = (value: string | undefined) => {
    setCode(value ?? '')
    const isValidJson = validJSON(value)

    if (isValidJson) {
      updateComponent({
        dataBase: {
          type: 'static',
          value: JSON.parse(value ?? '')
        }
      })
    } else {
      updateComponent({
        dataBase: {
          type: 'static',
          value: '',
        }
      })
    }
  }

  return (
    <div>
      <MonacoEditor
        height="500px"
        language="json"
        theme='vs-light'
        value={code}
        onChange={handleEditorChange}
        options={{
          selectOnLineNumbers: true,
          roundedSelection: false,
          cursorStyle: 'line',
          automaticLayout: true,
        }}
      />
    </div>
  )
}

export default Code
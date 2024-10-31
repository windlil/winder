import EditorLayout from "@/layouts/EditorLayout"
import Left from "./components/Left"
import Header from "./components/Header"
import Right from "./components/Right"
import Center from "./components/Center"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

const EditorPage = () => {

  const editorLayoutProps = {
    Header: <Header />,
    Left: <Left />,
    Center: <Center />,
    Right: <Right />,
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <EditorLayout
        {...editorLayoutProps}
      />
    </DndProvider>
  )
}

export default EditorPage
import EditorLayout from "@/layouts/EditorLayout"
import Left from "./components/Left"
import Header from "./components/Header"
import Right from "./components/Right"
import Center from "./components/Center"

const EditorPage = () => {

  const editorLayoutProps = {
    Header: <Header />,
    Left: <Left />,
    Center: <Center />,
    Right: <Right />,
  }

  return (
    <EditorLayout
      {...editorLayoutProps}
    />
  )
}

export default EditorPage
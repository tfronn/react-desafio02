import './styles/global.scss'
import './styles/sidebar.scss'
import './styles/content.scss'
import { SideBar } from './components/SideBar'
import { Content } from './components/Content'
import { useState } from 'react'

interface GenreResponseProps {
  id: number
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  title: string
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1)
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  )

  function handleClickButton(id: number) {
    setSelectedGenreId(id)
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        handleClickButton={handleClickButton}
      />
      <Content
        setSelectedGenre={setSelectedGenre}
        selectedGenre={selectedGenre}
        selectedGenreId={selectedGenreId}
      />
    </div>
  )
}

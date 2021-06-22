import { useState } from 'react';
import youtube from './apis/youtube';
import './App.scss';
import { SearchBar } from './components/SearchBar';
import { VideoList } from './components/VideoList';
export const App = () => {
  const [newVideos, setNewVideos] = useState({
    videos: [],
    seledvideos: null
  })
  const handleSubmit = async (textFromSearchBar) => {
    const response = await youtube.get('/search', {
      params: {
        q: textFromSearchBar,
      }
    }
    )
    setNewVideos((preNewVideos) => ({
      ...preNewVideos,
      videos: response.data.items
    }))
    console.log(newVideos)
  }


  return (
    <div className="App">
      <SearchBar handleFormSubmit={handleSubmit}/>
      <VideoList videos={newVideos} />
      <h1>Clone Youtube</h1>
    </div>
  );
}

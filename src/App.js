import { useState } from 'react';
import youtube from './apis/youtube';
import './App.scss';
import { SearchBar } from './components/SearchBar';
import { VideoList } from './components/VideoList';
import { VideoDetail } from './components/VideoDetail';
export const App = () => {
  const [newVideos, setNewVideos] = useState({
    videos: [],
    seledvideos: null
  })
  const handleMainVideo = (video) => {
    setNewVideos((preNewVideos) => ({
      ...preNewVideos,
      seledvideos: video
    })

    )
    console.log(newVideos.seledvideos)
  }
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
      <div className='searchBar'>
        <SearchBar handleFormSubmit={handleSubmit} />
      </div>
      <div className='videos'>
        <div className='videoDetail'>
          <VideoDetail video={newVideos.seledvideos} />
        </div>
        <div className='videoList'>
          <VideoList videos={newVideos.videos} handleMainVideo={handleMainVideo} /></div>
      </div>

    </div>
  );
}

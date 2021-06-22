import { useState } from 'react';
import youtube from './apis/youtube';
import './App.scss';

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
  }


  return (
    <div className="App">
      <button onClick={() => handleSubmit('game')} >Play</button>
      <h1>Clone Youtube</h1>
    </div>
  );
}

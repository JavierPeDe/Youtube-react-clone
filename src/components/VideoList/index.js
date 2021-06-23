import React from 'react';
import { VideoItem } from './VideoItem/index';
import './index.scss'
export const VideoList = ({ videos, handleMainVideo }) => {

  const renderVideos = videos.map((video) => <VideoItem key={video.id.videoId} video={video} handleMainVideo={handleMainVideo} />);

  return (<div className="container-videos">
    
    {renderVideos}
    </div>)
};

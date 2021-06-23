import React from 'react';
import { VideoDetail } from './VideoDetail/index';
export const VideoList = ({ videos }) => {
  
    const renderVideos = videos.map((video) => <VideoDetail key={video.id.videoId} video={video} />);

  return ( <div className="container-videos">{renderVideos}</div>)
};

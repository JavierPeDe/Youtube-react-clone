import React from 'react';
import './index.scss'
export const VideoItem = ({ video, handleMainVideo }) => {
  return (
    <div className='video-item-container' onClick={()=>handleMainVideo(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="video-info-container">
        <h5>{video.snippet.title}</h5>
      </div>
    </div>
  );
};

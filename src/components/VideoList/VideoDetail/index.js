import React from 'react';

export const VideoDetail = ({ video }) => {
  return (
    <div>
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

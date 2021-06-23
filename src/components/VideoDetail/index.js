import React from 'react'
import ReactPlayer from 'react-player'
import './index.scss'
export const VideoDetail = ({ video }) => {
        
    return (
        <div className='container-detail-video'>

            <div className='selected-video'>
                <ReactPlayer
                    url={video == null ? 'null' : `https://www.youtube.com/watch?v=${video.id.videoId}`}
                    controls
                    playing
                    muted
                    width='100%'
                    height={600}
                    className='video'
                />
                <div className='selected-video-info'>
                    <h4>{video == null ? '' :video.snippet.title}</h4>
                    <p>{video == null ? '' :video.snippet.description}</p>
                </div>
            </div>
        </div>
    )

}
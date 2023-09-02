import React from 'react'

function VideoPlayer({video}) {
  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        allowFullScreen
        title={video.title}
      />
    </div>
  )
}

export default VideoPlayer;
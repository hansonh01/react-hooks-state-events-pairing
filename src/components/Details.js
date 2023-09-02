import React, { useState } from 'react';
import Comments from './Comments';

function Details({video}) {
  const [likes, setLikes] = useState(video.upvotes);
  const [dislikes, setDislikes] = useState(video.downvotes);

  const handleLikes = () => setLikes(likes + 1);
  const handleDislikes = () => setDislikes(dislikes + 1);

  const [displayComments, setDisplayComments] = useState(false);
  const handleDisplayComments = () => setDisplayComments(!displayComments);

  return (
    <div>
      <h4>
        {video.views} Views | Uploaded {video.createdAt}
      </h4>
      <div className='ui labeled button' tabindex="0" value={likes} onClick={handleLikes}>
        <div className='ui red button'>
          <i className='heart icon'></i> Like
        </div>
        <a className='ui basic red left pointing label'> 
        {likes}
        </a>
      </div>
      <div className='ui labeled button' tabindex="0" value={dislikes} onClick={handleDislikes}>
        <div className='ui basic blue button'>
          <i className="thumbs down icon"></i> Dislikes
        </div>
        <a className='ui basic left pointing blue label'>
          {dislikes}
        </a>
      </div>
      <div>
        <button className='ui labeled icon button' onClick={handleDisplayComments}>
        <i className='comments icon'/>
        {displayComments ? "Hide Comments" : "Show Comments"}
        </button>
      </div>
      {displayComments ? <Comments comments = {video.comments}/>:null}
    </div>
  )
}

export default Details;
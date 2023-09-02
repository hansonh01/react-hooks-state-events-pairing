import React, { useState } from 'react'

function Comments({comments}) {
  const [userComments, setComments] = useState(comments);
  const handleComments = () => setComments(userComments);
  return (
    <div className='ui comments'>
      <h2 className='ui dividing header'>Comments:</h2>
      {comments.map((comment)=>(
        <div className='comment' key={comment.id} onChange={handleComments}>
          <a className='avatar'>
            <i class="user icon"></i>
          </a>
          <div className='content'>
            <a className='author'>{comment.user}</a>
            <div className='text'>{comment.comment}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Comments;
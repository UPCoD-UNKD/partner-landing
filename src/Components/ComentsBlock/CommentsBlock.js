import React from 'react'
import './CommentsBlock.scss'
import UserCommentCard from '../../Common/UserCommentCard/UserCommentCard'

export default function CommentsBlock({title, name, comment, user, position}) {
  return (
    <div className="CommentsBlock">
      <div className="container">
        <h3 className="CommentsBlock__header">
          {title}
        </h3>
      </div>
      <div className="hr"></div>
      <UserCommentCard 
        name={name}
        comment={comment}
        user={user}
        position={position}/>
    </div>
  )
}

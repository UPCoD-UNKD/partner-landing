import React from 'react'
import './UserCommentCard.scss'
import user1 from '../../assets/img/users/user_1.png'
import user2 from '../../assets/img/users/user_2.png'
import user3 from '../../assets/img/users/user_3.png'
import user4 from '../../assets/img/users/user_4.png'
import SliderDots from '../SliderDots/SliderDots'


export default function UserCommentCard({name, comment, users, position}) {
  return (
    <div className="UserCommentCard">
      <div className="UserCommentCard__inner">
        <span className="UserCommentCard__msg">
          {comment}
        </span>
        <div className="UserCommentCard__users">
          <div className="UserCommentCard__users-current">
            <img className='user__current-icon' src={user1} alt="user" />
            <h4 className="user__current-title">
              {name}
              {/* Уляна Селезньова */}
              {position 
              ?
              <span className='user__current-position'>{position}</span>
              :
              null
              }
            </h4>
          </div>
          <div className="UserCommentCard__users-all">
            {/* {users.map(user => {
              return (
                <img className='user__all-icon' src={user} alt="user" />
              )
            })} */}

            <img className='user__all-icon' src={user2} alt="user" />
            <img className='user__all-icon' src={user3} alt="user" />
            <img className='user__all-icon' src={user4} alt="user" />
          </div>
        </div>
      </div>
      <SliderDots />
    </div>
  )
}

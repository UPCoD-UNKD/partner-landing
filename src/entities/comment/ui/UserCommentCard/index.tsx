import user1 from 'shared/assets/img/users/user_1.png'
import user2 from 'shared/assets/img/users/user_2.png'
import user3 from 'shared/assets/img/users/user_3.png'
import user4 from 'shared/assets/img/users/user_4.png'
import { Message } from './Message'
import { Wrapper } from './Wrapper'
import { UserAllIcon, UserCurrentIcon, UserCurrentTitle, Users, UsersCurrent } from './Users'

interface UserCommentCardProps {
  senderName: string
  position: string
  commentText: string
}

export function UserCommentCard(props: UserCommentCardProps) {
  const {
    commentText,
    position,
    senderName
  } = props

  return (
    <>
      <Wrapper>
        <Message>{commentText}</Message>
        <Users>
          <UsersCurrent>
            <UserCurrentIcon src={user1} alt="user" />
            <UserCurrentTitle>
              {senderName}
              {
                position &&
                <span className='user__current-position'>{position}</span>
              }
            </UserCurrentTitle>
          </UsersCurrent>

          <div>
          <UserAllIcon src={user1} alt="user" />
          <UserAllIcon src={user2} alt="user" />
          <UserAllIcon src={user3} alt="user" />
          <UserAllIcon src={user4} alt="user" />
          </div>
        </Users>
      </Wrapper>
    </>
  )
}

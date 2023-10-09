import { UserCommentCard } from "entities/comment";
import { Wrapper } from "./Wrapper";
import { Header } from "./Header";
import { Line } from "./Line";

interface CommentsProps {
  title: string
}

export function Comments(props: CommentsProps) {
  return (
    <Wrapper>
      <Header> {props.title}</Header>
      <Line />
      <UserCommentCard commentText="Comment text" position="Position" senderName="sender name" />
    </Wrapper>
  )
}

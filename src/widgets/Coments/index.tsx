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
    </Wrapper>
  )
}

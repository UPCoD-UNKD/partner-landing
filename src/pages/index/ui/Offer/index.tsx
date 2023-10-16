import stars from 'shared/assets/img/stars.svg'
import emoji from 'shared/assets/img/emoji.svg'
import progressArrow from 'shared/assets/img/progress_arrow.svg'
import { Wrapper } from './Wrapper'
import { Title1, Title2, Title3 } from './Titles'
import { Circle } from './Circle'
import { Container } from 'shared/ui/page-layout/Container'

export function Offer() {
  return (
    <Container>
      <Wrapper>
        <Circle />

        <Title1>
          <img src={stars} alt="star" />
          <span>Приєднуйтесь</span>
        </Title1>

        <Title2>
          <span>збільшуйте</span>
          <img src={emoji} alt="star" />
        </Title2>

        <Title3>
          <span>просувайте</span>
          <img src={progressArrow} alt="star" />
        </Title3>

      </Wrapper>
    </Container>
  )
}

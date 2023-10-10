import instagram from 'shared/assets/img/social/instagram.svg';
import facebook from 'shared/assets/img/social/facebook.svg';
import linkedin from 'shared/assets/img/social/linkedin.svg';
import twitter from 'shared/assets/img/social/twitter.svg';
import scrollDown from 'shared/assets/img/scroll_down.svg';
import { Wrapper } from './Wraper';
import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { Link } from './Link';
import { Scroll } from './Scroll';
import { Social, SocialList } from './Social';
import { Inner } from './Inner';
import { Options } from './Options';

export default function Banner() {
  return (
    <Wrapper>
      <Inner>
        <div>
          <Title>
            <div>Розблокуйте свій</div>
            <div style={{ display: 'flex' }}>
              <div>потенціал</div>
              <Subtitle>
                <div>для тих, хто прагне вже </div>
                <div>сьогодні збільшити</div>
                <div>прибуток!</div>
              </Subtitle>
            </div>

            <div>прямо зараз!</div>
          </Title>
        </div>

        <nav>
          <SocialList>
            <Social iconSrc={instagram} href='#' />
            <Social iconSrc={facebook} href='#' />
            <Social iconSrc={twitter} href='#' />
            <Social iconSrc={linkedin} href='#' />
          </SocialList>
        </nav>
      </Inner>

      <Options>
        <Link href='#'>
          Отримати партнерку
        </Link>
        <Scroll src={scrollDown} alt="scroll down" />
      </Options>
    </Wrapper>
  )
}

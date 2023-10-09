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

export default function Banner() {
  return (
    <Wrapper>
      <div className="title-wrap">
        <Title>
          Розблокуйте свій потенціал
          <Subtitle>
            для тих, хто прагне вже сьогодні збільшити прибуток!
          </Subtitle>
          прямо зараз!
        </Title>
        <Link>
          Отримати партнерку
        </Link>
      </div>
      <Scroll src={scrollDown} alt="scroll down" />
      <nav className="Banner__nav">
        <SocialList>
          <Social iconSrc={instagram} href='#' />
          <Social iconSrc={facebook} href='#' />
          <Social iconSrc={twitter} href='#' />
          <Social iconSrc={linkedin} href='#' />
        </SocialList>
      </nav>
    </Wrapper>
  )
}

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

export default function Banner() {
  return (
    <Wrapper>
      <Inner>
        <div style={{ flexBasis: '91%' }}>
          <Title>
            Розблокуйте свій потенціал
            <Subtitle>
              для тих, хто прагне вже сьогодні збільшити прибуток!
            </Subtitle>
            прямо зараз!
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

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '2.5rem',
        paddingRight: '10.25rem'
      }}>
        <Link>
          Отримати партнерку
        </Link>
        <Scroll src={scrollDown} alt="scroll down" />
      </div>
    </Wrapper>
  )
}

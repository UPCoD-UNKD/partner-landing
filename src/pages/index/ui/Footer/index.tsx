import { BlackSection } from "pages/index/LandingWrapper"
import { Container } from "shared/ui/page-layout/Container"
import styled from "styled-components"
import logoURL from 'shared/assets/img/logo-2.svg'
import { Social as UnstyledSocial } from "../HeroSection/Banner/Social"
import instagram from 'shared/assets/img/social/instagram.svg';
import facebook from 'shared/assets/img/social/facebook.svg';
import linkedin from 'shared/assets/img/social/linkedin.svg';
import twitter from 'shared/assets/img/social/twitter.svg';

const StyledSectionWrapper = styled(BlackSection)`
	margin-top: 4.9375rem;
	padding-top: 4.8125rem;
	position: relative;

	@media (max-width: 900px) {
		padding-top: 3.3125rem;
		margin-top: 3.125rem;
	}
	@media (max-width: 550px) {
		padding-top: 2.5rem;
	}
`

const Social = styled(UnstyledSocial)`
	@media (max-width: 900px) {
		img {
			width: 1.6rem;
			height: 1.6rem;
		}
	}
	@media (max-width: 500px) {
		img {
			width: 1.1rem;
			height: 1.1rem;
		}
	}
`

const Title = styled.h6`
	position: relative;
	z-index: 2;

	text-align: center;
	font-size: 4rem;
	text-transform: uppercase;
	font-weight: 700;
	line-height: 5.125rem;
	color: rgba(255, 255, 255, 1);
	& div {
		font-size: 2.125rem;
		color: rgba(102, 144, 5, 1);
		text-transform: none;
	}

@media (max-width: 900px) {
	font-size: 3.1rem;
	line-height: 4rem;
	& div {
		font-size: 2.125rem;
	}
}
@media (max-width: 550px) {
	line-height: 3.375rem;
	font-size: 2.5rem;
	& div {
		font-size: 2rem;
	}
}

@media (max-width: 400px) {
	line-height: 2.5rem;
  font-size: 2rem;
}

`
const SubmitLink = styled.a`
	padding: 1.5rem 3.9375rem;
	display: inline-block;
	border: 3px solid rgba(169, 207, 84, 1);
	border-radius: 5rem;
	color: rgba(247, 248, 250, 1);
	margin-top: 2.6875rem;
	&:hover {
		color: rgb(32,32,32);
		background-color: rgba(169, 207, 84, 1);
	}

	@media (max-width: 900px) {
		padding: 1.125rem;
		margin-top: 1.6875rem;
		font-size: 1.25rem;
	}
	@media (max-width: 500px) {
		padding: 0.625rem;
		margin-top: 1.5rem;
		font-size: 0.625rem;
	}
	
`
const Options = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	padding-bottom: 4.5625rem;
`

const Logo = styled.img`
	width: 22.25rem;
    position: absolute;
    top: 4.5rem;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.7;
    z-index: 1;

		@media (max-width: 900px) {
			width: 14.375rem;
		}
		@media (max-width: 550px) {
			width: 8.375rem;
		}
`

const LinkList = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1.8125rem 3rem;
	border-top: 1px solid rgb(140, 140, 140);
	align-items: center;
	gap: .9rem;
	
	@media (max-width: 900px) {
		padding: 1.125rem 2rem;
	}
	@media (max-width: 500px) {
		padding: 0.625rem 1rem;
	}
	
`

const SocWrapper = styled.div`
	display: flex;
	gap: 1.4375rem;
	align-items: center;

	@media (max-width: 900px) {
		gap: 0.9375rem;
	}
	@media (max-width: 500px) {
		gap: 0.625rem;
	}
`

const LinksSubWrapper = styled.div`
	display: flex;
	gap: 3.9375rem;
	align-items: center;

	@media (max-width: 900px) {
		gap: 2.5rem;
	}
	@media (max-width: 500px) {
		gap: 1.25rem;
	}
	@media (max-width: 390px) {
		gap: 0.8rem;
	}
`

const Link = styled.a`
	font-weight: 700;
	font-size: 1rem;
	color: white;
	&:hover {
		text-decoration: underline;
	}

	@media (max-width: 500px) {
		font-size: 0.625rem;
	}
`

export const Footer = () => {
	return (
		<Container>
			<StyledSectionWrapper>
				<Logo src={logoURL} />
				<Title>
					Будьте попереду конкурентів
					<div>
						почніть заробляти та розширюйте свій бізнес
					</div>
					разом з нами
				</Title>

				<Options>
					<SubmitLink href="#">Отримати партнерку </SubmitLink>
				</Options>

				<LinkList>
					<SocWrapper>
						<Social iconSrc={facebook} href="#" />
						<Social iconSrc={linkedin} href="#" />
						<Social iconSrc={twitter} href="#" />
						<Social iconSrc={instagram} href="#" />
					</SocWrapper>

					<LinksSubWrapper>
						<Link href="#">Політика конфіденційності</Link>
						<Link href="#">Умови використання</Link>
					</LinksSubWrapper>
				</LinkList>
			</StyledSectionWrapper>
		</Container>
	)
}
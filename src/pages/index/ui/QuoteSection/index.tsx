import { Container } from "shared/ui/page-layout/Container"
import styled from "styled-components"
import quoteIcon from 'shared/assets/img/quotes.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { UserCard } from "./UserCard";
import { BlackSection } from "pages/index/LandingWrapper";



const Inner = styled(Swiper)`
	border: 3px solid rgba(247, 248, 250, 0.5);
	padding: 2rem 3.125rem;
	border-radius: 2rem;

`
const QuoteWrapper = styled.div`
	display: flex;
	gap: 0.75rem;
`
const Slide = styled(SwiperSlide)`
	
`
const QuoteIcon = styled.img.attrs({
	src: quoteIcon
})`
	flex: 0 1 1.1875rem;
`

const Quote = styled.blockquote`
	font-size: 1.125rem;
	font-weight: 400;
	flex: 1 0;
`


const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 52%;
	padding: 6.125rem 0 7.9375rem;
	margin: 0 auto;
`


interface QuoteSectionProps {
	className?: string

	title: string
	quotes: Array<{
		name: string
		avatarURL?: string
		quoteText: string
		position: string
	}>
}

export const QuoteSection = (props: QuoteSectionProps) => {
	const {
		title,
		quotes,
		className
	} = props

	return (
		<Container>
			<BlackSection className={className} title={title} >
				<Center>
					<Inner>
						{quotes.map(q => (
							<Slide>
								<QuoteWrapper>
									<QuoteIcon />
									<Quote>{q.quoteText}</Quote>
								</QuoteWrapper>

								<UserCard avatar={q.avatarURL} name={q.name} position={q.position} />

							</Slide>
						))}
					</Inner>
				</Center>
			</BlackSection>
		</Container>
	)
}
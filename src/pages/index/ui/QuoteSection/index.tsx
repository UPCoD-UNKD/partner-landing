import { Container } from "shared/ui/page-layout/Container"
import styled from "styled-components"
import quoteIcon from 'shared/assets/img/quotes.svg'
import { UserCard } from "./UserCard";
import { BlackSection } from "pages/index/LandingWrapper";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

// const Inner = styled(Swiper)`
// 	border: 3px solid rgba(247, 248, 250, 0.5);
// 	padding: 2rem 3.125rem;
// 	border-radius: 2rem;

// 	@media (max-width: 900px) {
// 		padding: 1.625rem 2.75rem 0.8125rem;
// 	}
// 	@media (max-width: 500px) {
// 		padding: 1rem 2rem 0.8125rem;
// 	}
// `
const QuoteWrapper = styled.div`
	display: flex;
	gap: 0.75rem;
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

	@media (max-width: 900px) {
		font-size: 0.875rem;
	}
	@media (max-width: 500px) {
		font-size: 0.625rem;
	}
`


const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 52%;
	padding: 6.125rem 0 7.9375rem;
	margin: 0 auto;

	@media (max-width: 900px) {
		max-width: 56%;
	}
	@media (max-width: 500px) {
		max-width: 72%;
	}
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

// const Dot = styled.div<{ $isSelected?: boolean }>`
// 	width: .5rem;
// 	height: .5rem;
// 	border-radius: 50%;

// 	background-color: ${props => props.$isSelected ? 'rgba(197, 255, 68, 1)' : 'rgba(226, 250, 173, 1)'};
// `

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
					<Carousel
						infiniteLoop
						renderItem={item => item}
					>
						{quotes.map(q => (
							<div>
								<QuoteWrapper>
									<QuoteIcon />
									<Quote>{q.quoteText}</Quote>
								</QuoteWrapper>
								<UserCard avatar={q.avatarURL} name={q.name} position={q.position} />
							</div>
						))}
					</Carousel>
				</Center>
			</BlackSection>
		</Container>
	)
}

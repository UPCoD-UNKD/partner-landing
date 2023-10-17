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

const Dot = styled.div<{ $isSelected?: boolean }>`
	width: .5rem;
	height: .5rem;
	border-radius: 50%;

	background-color: ${props => props.$isSelected ? 'rgba(197, 255, 68, 1)' : 'rgba(226, 250, 173, 1)'};
`

const StyledCarousel = styled(Carousel)`
	border: 3px solid #8b8c8d;
	padding: 2rem 1.125rem;
	border-radius: 2rem;
	& .carousel .slide img {
		width: auto;
	}
	& .carousel.carousel-slider {
		overflow: visible;
	}
	& .carousel.carousel-slider .control-dots {
		bottom: -7rem;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: .5rem;
	}
`

const OtherAvatars = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	& img {
		margin-left: -0.5rem;
		width: 3.6875rem;
		height: 3.6875rem;
		object-fit: cover;
		border-radius: 50px;
	}
`

const Inner = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 2rem;
margin-top: 2rem;
gap: 2rem;

@media(max-width: 900px) {
	margin-top: 1.25rem;
}
@media(max-width: 500px) {
	margin-top: 1.25rem;
}
@media(max-width: 500px) {
	margin-top: 1rem;
}
`

export const QuoteSection = (props: QuoteSectionProps) => {
	const {
		title,
		quotes,
		className
	} = props

	return (
		<Container>
			<BlackSection className={className} title={title}>
				<Center>
					<StyledCarousel
						infiniteLoop
						renderItem={item => item}
						renderIndicator={(_, isSelected) => <Dot $isSelected={isSelected} />}
					>
						{quotes.map(q => (
							<div>
								<div>
									<QuoteWrapper>
										<QuoteIcon />
										<Quote>{q.quoteText}</Quote>
									</QuoteWrapper>
									<Inner>
										<UserCard avatar={q.avatarURL} name={q.name} position={q.position} />

										<OtherAvatars>
											{quotes
												.filter(currentQ => currentQ.name !== q.name)
												.map(q => <img src={q.avatarURL} />)
											}
										</OtherAvatars>
									</Inner>
								</div>
							</div>
						))}
					</StyledCarousel>
				</Center>
			</BlackSection>
		</Container >
	)
}

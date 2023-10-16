import styled from 'styled-components'

export const SocialIcon = styled.img`
	width: 2rem;
	height: 2rem;
`
interface SocialProps {
	iconSrc: string
	href?: string
	className?: string
}

const SocWrapper = styled.a`
	
`

export const Social = (props: SocialProps) => {
	const {
		iconSrc,
		href,
		className
	} = props

	return (
		<SocWrapper href={href} className={className}>
			<SocialIcon src={iconSrc} />
		</SocWrapper>
	)
}

export const SocialList = styled.div`
	display: flex;
  flex-direction: column;
  gap: 1.875rem;
	@media (max-width: 660px) {
	flex-direction: row;
	justify-content: center;
	
	}
`

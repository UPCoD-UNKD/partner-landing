import styled from 'styled-components'

export const SocialIcon = styled.img`
	width: 2rem;
	height: 2rem;
`
interface SocialProps {
	iconSrc: string
	href?: string
}

export const Social = (props: SocialProps) => {
	const {
		iconSrc,
		href,
	} = props

	return (
		<a href={href}>
			<SocialIcon src={iconSrc} />
		</a>
	)
}

export const SocialList = styled.div`
	display: flex;
  flex-direction: column;
  gap: 30px;
	margin-top: 70px;
`

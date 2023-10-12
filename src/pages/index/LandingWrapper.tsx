import styled from 'styled-components'

export const LandingWrapper = styled.div`
background-color: #F7F8FA;
overflow-x: hidden;

`
const BlackWrapper = styled.div`
background-color: rgba(32, 32, 32, 1);
	border-top-right-radius: 4.9375rem;
	border-top-left-radius: 4.9375rem;
	color: rgba(255, 255, 255, 1);
	
`

const Title = styled.h4`
	font-size: 2.6875rem;
	font-weight: 700;
	line-height: 2.75rem;
	padding: 3rem 2.9375rem 2.0625rem;
	text-transform: uppercase;
	border-bottom: 1px solid rgba(247, 248, 250, 1);
`

interface BlackSectionProps extends React.PropsWithChildren {
	title?: string
	className?: string
}
export const BlackSection = (props: BlackSectionProps) => {
	const { children, title, className } = props

	return (
		<BlackWrapper className={className}>
			{title && <Title>{title}</Title>}
			{children}
		</BlackWrapper>
	)
}
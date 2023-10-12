import styled from "styled-components"

const Wrapper = styled.div`
	
`
const StepsWrapper = styled.div`
	display: flex;
`
const StepNumber = styled.div`
	/* padding: 0.4375rem 0.625rem; */
	background-color: rgba(234, 193, 49, 1);
	font-size: 1.5rem;
	font-weight: 400;
	border-radius: 50rem;
	width: 2.5rem;
	height: 2.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Title = styled.h6`
	font-size: 1.18rem;
	font-weight: 700;
	margin-top: 2.1875rem;
	color: rgba(102, 144, 5, 1);
`
const Body = styled.p`
	margin-top: 2.1875rem;
	color: rgba(247, 248, 250, 1);
	font-size: 1rem;
	font-weight: 400;
`

interface StepProps {
	num: number
	title: string
	body: string
}

export const Step = (props: StepProps) => {
	const { body, num, title } = props

	return (
		<Wrapper>
			<StepsWrapper>
				{num.toString.length === 1 && <StepNumber><div>0</div></StepNumber>}
				<StepNumber><div>{num}</div></StepNumber>
			</StepsWrapper>

			<Title>{title}</Title>
			<Body>{body}</Body>
		</Wrapper>
	)
}
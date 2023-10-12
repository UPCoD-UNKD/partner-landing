import { BlackSection } from "pages/index/LandingWrapper"
import styled from "styled-components"
import { Step } from "./Step"
import { Container } from "shared/ui/page-layout/Container"

interface HowItWorksProps {
	steps: Array<{
		title: string
		body: string
	}>
}

const Wrapper = styled.div`
	display: flex;
	padding: 4.4375rem 3.1875rem;
	gap: 2.5rem;
	flex: 1 1;
`

export const HowItWorks = (props: HowItWorksProps) => {
	const { steps } = props


	return (
		<Container>
			<BlackSection title="Як це працює">
				<Wrapper>
					{
						steps.map((step, index) => <Step
							body={step.body}
							title={step.title}
							num={index}
						/>)
					}
				</Wrapper>
			</BlackSection>
		</Container>
	)
}

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

	@media (max-width: 900px) {
		gap: 1.875rem;
		padding: 2.4375rem 1.875rem 3.25rem;
	}
	@media (max-width: 550px) {
		gap: 1.4375rem;
		padding: 2.0625rem 1.1875rem 1.6875rem;
	}
	@media (max-width: 400px) {
		flex-direction: column;
		text-align: center;
		gap: 1.4375rem;
		padding: 2.0625rem 1.1875rem 1.6875rem;
	}
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

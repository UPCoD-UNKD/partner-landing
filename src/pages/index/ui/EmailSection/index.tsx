import styled from "styled-components"
import { Container } from "shared/ui/page-layout/Container"
import { Alert } from "./Alert"
import { Heading } from "./Heading"
import { EmailInput } from "./EmailInput"

const EmailSectionWrapper = styled.div`
	padding-bottom: 4.9375rem;

	@media (max-width: 738px) {
		padding-bottom: 3.1875rem;
	}
	
`
const Inner = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`

const FlexWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	margin-left: 5.1875rem;
	margin-right: 5.1875rem;
	@media (max-width: 900px) {
		margin-left: 3.375rem;
		margin-right: 3.375rem;
	}
	@media (max-width: 550px) {
		margin-left: 1rem;
		margin-right: 1rem;
	}
	@media (max-width: 437px) {
		margin-left: 0.7rem;
		margin-right: 0.7rem;
		flex-direction: column;
		gap: 1rem;
	}
`

export const EmailSection = () => {
	return (
		<EmailSectionWrapper>
			<Container>
				<Inner>
					<Alert />
					<FlexWrapper>
						<Heading />
						<EmailInput />
					</FlexWrapper>
				</Inner>
			</Container>
		</EmailSectionWrapper>
	)
}
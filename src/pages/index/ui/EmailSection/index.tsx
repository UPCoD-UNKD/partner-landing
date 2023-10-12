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
	justify-content: space-between;
	align-items: center;
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
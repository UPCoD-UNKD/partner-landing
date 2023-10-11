import styled from 'styled-components'

export const Description = styled.p`
	text-align: center;
	color: rgba(255, 255, 255, 1);
	font-size: 1.1rem;
	margin-top: 2rem;
	font-weight: 700;
	opacity: .7;

	@media (max-width: 738px) {
		font-size: 1rem;
	}
	@media (max-width: 550px) {
		font-size: 0.8125rem;
	}
`

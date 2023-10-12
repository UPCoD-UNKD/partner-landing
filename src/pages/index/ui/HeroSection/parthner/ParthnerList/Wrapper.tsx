import styled from 'styled-components'

export const Wrapper = styled.div`
	border-top: 1px solid rgba(247, 248, 250, 1);
	padding-top: 2.1875rem;
	padding-left: 2.9375rem;
	padding-right: 2.9375rem;
	padding-bottom: 1.6875rem;
	overflow: hidden;
	@media (max-width: 738px) {
	padding-top: 1.375rem;
	padding-left: 1.875rem;
	padding-right: 1.875rem;
	padding-bottom: 1.1875rem;
	}
	@media (max-width: 550px) {
	padding: 1.375rem 1rem 1rem;
	}
`
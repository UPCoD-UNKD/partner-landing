import styled from "styled-components";

export const Circle = styled.div`
	border-radius: 50%;
	background-color: rgb(222,248,130);
	width: 23rem;
	height: 23rem;
	position: relative;
	/* top: 1.1875rem; */
	z-index: 1;

	@media (max-width: 970px) {
		width: 17.8125rem;
		height: 17.8125rem;
	}
	@media (max-width: 680px) {
		width: 11.875rem;
		height: 11.875rem;
	}
`
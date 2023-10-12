import styled from "styled-components";

const Circle = styled.div`
	background-color: rgb(222, 248, 130);
	width: 18.8125rem;
	height: 18.8125rem;
	border-radius: 50%;
	@media (max-width: 738px) {
		width: 12.1875rem;
		height: 12.1875rem;
	}
	@media (max-width: 738px) {
		width: 12.1875rem;
		height: 12.1875rem;
	}
	@media (max-width: 550px) {
		width: 9.875rem;
		height: 9.875rem;
	}
	
`

const Wrapper = styled.div`
	position: relative;
	padding-top: 1.5625rem;
	margin-left: 5.1875rem;
	margin-top: 1.375rem;
	flex-grow: 1;
`

const Text = styled.h3`
	margin-left: -0.5rem;
	padding-top: 4.375rem;
	font-size: 3.9375rem;
	font-weight: bold;
	position: relative;
	z-index: 2;
	max-width: 43rem;
	position: absolute;
	top: 0;
	left: 0;
	& span {
		display: block;
		background-color: white;
		/* max-width: 50%; */
	}

	@media (max-width: 900px) {
		font-size: 2.5rem;
		padding-top: 4.9375rem;
	}
	@media (max-width: 738px) {
		font-size: 2.1rem;
	}
	@media (max-width: 647px) {
		font-size: 1.7rem;
    padding-top: 4.375rem;
	}
	@media (max-width: 550px) {
		padding-top: 3.375rem;
	}
	/* @media (max-width: 550px) {
		font-size: 2.1875rem;
		padding-top: 3.375rem;
	} */
	/* @media (max-width: 450px) { */
		/* font-size: 1.7rem; */
		/* padding-top: 3.375rem; */
	/* } */
`

export const Heading = () => {
	return (
		<Wrapper>
			<Text>
				Перетворіть свій сайт на прибуткове
				<span>джерело!</span>
			</Text>
			<Circle />
		</Wrapper>
	)
}

import styled from "styled-components"
import iconURL from 'shared/assets/img/right_arrow.svg'

const Wrapper = styled.div`
	display: flex;
	gap: 1.0625rem;
	/* align-items: center; */
	margin-bottom: 5.8125rem;
	align-self: flex-end;
	/* position: absolute; */
	/* right: 5.125rem; */
	/* top: 14.6875rem; */

	@media (max-width: 945px) {
		/* top: 9.5rem; */
		gap: 0.6875rem;
	}
	
	@media (max-width: 738px) {
		/* top: 10.5625rem; */
	}
	@media (max-width: 550px) {
		margin-bottom: 0;
	}
`
const Input = styled.input.attrs({
	type: 'text',
	placeholder: 'Залиште свій e-mail',
})`
	text-align: center;
	border: 3px solid rgb(169, 207, 84);
	border-radius: 100px;
	padding: 0 1.5625rem;
	/* flex-basis: 19.75rem; */
	font-size: 1.1875rem;
	flex-shrink: 0;
	&::placeholder{
		color: rgb(32,32,32)
	}

	@media (max-width: 900px) {
		padding: 0 1rem;
		font-size: 0.95rem;
	}
	@media (max-width: 550px) {
		padding: 0 0.5125rem;

	}
`

const Submit = styled.button.attrs({
	type: 'submit',
	children: <img src={iconURL} />
})`
	width: 3.9375rem;
	height: 3.9375rem;
	flex-shrink: 0;
	flex-grow: 0;

	@media (max-width: 900px) {
		width: 2.5625rem;
		height: 2.5625rem;
	}
	@media (max-width: 550px) {
		width: 2.3125rem;
		height: 2.3125rem;
	}
`

export const EmailInput = () => {
	return (
		<Wrapper>
			<Input />
			<Submit />
		</Wrapper>
	)
}
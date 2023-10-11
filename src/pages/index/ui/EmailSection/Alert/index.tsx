import styled from "styled-components"
import icon from 'shared/assets/img/done.svg'

const Wrapper = styled.div`
	background-color: rgb(169,207, 84);
	border-bottom-left-radius: 2rem;
	display: inline-flex;
	align-items: center;
	gap: 1rem;
	padding: 1rem 1.5625rem;
	align-self: flex-end;

	@media (max-width: 738px) {
		padding: 0.625rem 1rem;
	}
	@media (max-width: 550px) {
		display: none;
	}
	
`
const Icon = styled.img.attrs({

})`
	width: 2.1875rem;
	height: 2.1875rem;
`

const Text = styled.p`
	font-size: 1.0625rem;
	font-weight: bold;
	@media (max-width: 738px) {
		font-size: 0.75rem;
	}
`

export const Alert = () => {
	return (
		<Wrapper>
			<Icon src={icon} />
			<Text>Дякуємо, що приєднались до нас</Text>
		</Wrapper>
	)
}

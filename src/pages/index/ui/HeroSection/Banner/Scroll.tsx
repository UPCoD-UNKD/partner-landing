import styled from 'styled-components'
import scrollDown from 'shared/assets/img/scroll_down.svg';

export const Scroll = styled.button.attrs({
	type: 'button',
	children: <img src={scrollDown} alt="scroll down" />
})`

	cursor: pointer;
  align-self: flex-end; 
	width: 4.4375rem;
	height: 4.4375rem;

	@media (max-width: 738px) {
		width: 2.875rem;
		height: 2.875rem;
	}
	@media (max-width: 450px) {
		width: 2.1875rem;
		height: 2.1875rem;
	}
`

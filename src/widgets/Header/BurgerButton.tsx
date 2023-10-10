import styled from "styled-components";
import burgerIcon from 'shared/assets/img/burger.svg'

export const Button = styled.button`
	width: 4.25rem;
	height: 1.875rem;
`

const Icon = styled.img`
	max-width: 100%;
`

interface BurgerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export const BurgerButton = (props: BurgerButtonProps) => {
	return (
		<Button type="button" {...props}>
			<Icon src={burgerIcon} />
		</Button>
	)
}
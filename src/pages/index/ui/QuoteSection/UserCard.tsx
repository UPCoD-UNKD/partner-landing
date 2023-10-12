import styled from "styled-components"

interface UserCardProps {
	name: string
	avatar?: string
	position: string
}

const Wrapper = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 1.1875rem;
	border: 3px solid rgba(169, 207, 84, 1);
	border-radius: 4.9375rem;
	padding: 0.8125rem 1.3125rem;
	margin-top: 2rem;

	@media (max-width: 900px) {
		margin-top: 1.25rem;
	}
	@media (max-width: 500px) {
		margin-top: 1.25rem;
	}
	@media (max-width: 500px) {
		margin-top: 1rem;
	}
`
const Avatar = styled.img`
	width: 3.25rem;
	height: 3.25rem;
	border-radius: 50%;

`
const Inner = styled.div`
	
`
const Name = styled.p`
	font-weight: 700;
	font-size: 1rem;
	color: rgba(255, 255, 255, 1);

	@media (max-width: 900px) {
		font-size: 0.875rem;
	}
	@media (max-width: 500px) {
		font-size: 0.6875rem;
	}
`
const Position = styled.p`
	font-weight: 400;
	font-size: 0.8125rem;
	color: rgba(110, 110, 110, 1);
	margin-top: 0.1875rem;
`

export const UserCard = (props: UserCardProps) => {
	return (
		<Wrapper>
			<Avatar src={props.avatar} />
			<Inner>
				<Name>{props.name}</Name>
				<Position>{props.position}</Position>
			</Inner>
		</Wrapper>
	)
}
import styled from "styled-components";

export const Inner = styled.div`
display: flex;
justify-content: space-between;
gap: 1rem;

@media (max-width: 660px) {
	flex-direction: column;
	
}
`
import styled from 'styled-components'

export const Title = styled.h1`
margin-bottom: 80px;
font-size: 4.6875rem;
/* font-size: clamp(2.1875rem, 3.125rem, 4.6875rem); */
font-weight: 700;
color: rgba(169, 207, 84, 1);
text-transform: uppercase;
line-height: 6.9375rem;

@media (max-width: 931px) {
	font-size: 3.125rem;
	line-height: 4.9375rem;
}
@media (max-width: 610px) {
	font-size: 2.1875rem;
	line-height: 2.9375rem;
}
@media (max-width: 508px) {
	font-size: 1.8rem;
	/* line-height: 1rem; */
}

`

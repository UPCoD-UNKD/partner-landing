import styled from 'styled-components'

export const Subtitle = styled.div`
	display: inline-block;
  color: #fff;
  margin-left: 1.875rem;
  font-size: 1rem;
  /* font-size: clamp(0.8125rem, 0.875rem, 1.0625rem); */
  line-height: 2.3rem;

  @media (max-width: 931px) {
	font-size: 0.875rem;
	line-height: 1.6375rem;
	margin-left: 1rem;
}
@media (max-width: 546px) {
	font-size: 0.8125rem;
	line-height: 1.3rem;
	margin-left: 0.65rem;
}
@media (max-width: 402px) {
	font-size: 0.8125rem;
	line-height: 1rem;
}
@media (max-width: 384px) {
	font-size: 0.6rem;
	/* line-height: 2.6rem; */
}

`

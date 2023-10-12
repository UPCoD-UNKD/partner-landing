import styled from 'styled-components'

export const Wrapper = styled.div`
border-bottom: 1px solid rgba(247, 248, 250, .5);
display: flex;
justify-content: space-between;
align-items: center;

padding-top: 0.5625rem;
padding-right: 3rem;
padding-bottom: 0.5625rem;
padding-left: 1.75rem;

@media (max-width: 738px) {
   padding-right: 0;
   padding-top: 0.3125rem;
   padding-bottom: 0.3125rem;
}
`

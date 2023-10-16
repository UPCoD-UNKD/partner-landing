import styled from 'styled-components'

export const Wrapper = styled.div`
    border: 1px solid black;
    position: relative;
    display: flex;
    /* flex-direction: column; */
    /* gap: 4.4375rem; */
    padding: 10.25rem 0 5.5rem;
    align-items: center;
    justify-content: center;
    @media (max-width: 970px) {
        gap: 3.5625rem;
        padding: 3.5rem 0;
    }
    @media (max-width: 680px) {
        gap: 2.0625rem;
        padding: 1.875rem 0 1.1875rem;
    }
`


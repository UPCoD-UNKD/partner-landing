import styled from 'styled-components'

export const Title = styled.div`
	color: rgba(32, 32, 32, 1);
    text-transform: uppercase;
    position: absolute;
    z-index: 2;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    span {
        flex: 1 1;
    }
    img {
        flex: 1 1;
    }
    
`
export const Title1 = styled(Title)`
    top: 10.25rem;
    left: 9.6875rem;
    font-size: 3.9375rem;
    /* transform: translateX(-8rem); */
    img {
        width: 2,9375rem;
        height: 4,125rem;
        margin-right: 0.5rem;
    }

    @media (max-width: 970px) {
        font-size: 2.8125rem;
        top: 1.5rem;
        left: 3.8333rem;
        img {
            width: 2,3125rem;
            height: 3,1875rem;
            margin-right: 0.375rem;
        }
    }
    @media (max-width: 680px) {
        font-size: 1.75rem;
        left: 7.5rem;
        img {
            width: 1.3125rem;
            height: 1.875rem;
            margin-right: 1rem;
        }
    }
    @media (max-width: 510px) {
        left: 50%;
        transform: translateX(calc(-50% - 3rem));
    }
    @media (max-width: 325px) {
        font-size: 1.3rem;
    }
`

export const Title2 = styled(Title)`
    color: rgba(102, 144, 5, 1);
    font-size: 6.125rem;
    /* transform: translateX(-1.3125rem); */
    top: 18.1875rem;
    /* left: 17.3125rem; */
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(247, 248, 250, 1);
    img {
        width: 3.4375rem;
        height: 3.4375rem;
        margin-left: 1.8125rem;
    }
    @media (max-width: 970px) {
        top: 9.625rem;
        /* left: 8.75rem; */
        font-size: 4.625rem;
        img {
        width: 2.6875rem;
        height: 2.6875rem;
        margin-left: 2.25rem;
        }
    }
    @media (max-width: 680px) {
        font-size: 2.75rem;
        /* left: 11.8333rem; */
        top: 6rem;
        img {
        width: 1.75rem;
        height: 1.75rem;
        margin-left: 0.5rem;
    }
    }
    @media (max-width: 574px) {
        font-size: 2.75rem;
        /* left: 7rem; */
        top: 6rem;
    }
    @media (max-width: 325px) {
        font-size: 2.5rem;
    }
`

export const Title3 = styled(Title)`
    font-size: 4.125rem;
    /* transform: translateX(-3.3125rem); */
    top: 26.625rem;
    left: 16.3125rem;
    img {
        width: 4.5rem;
        margin-left: 1.5625rem;
    }
    @media (max-width: 970px) {
        top: 16.1875rem;
        left: 15.5rem;
        font-size: 2.8125rem;
        img {
        width: 3.5rem;
        margin-left: 0.6875rem;
        }
    }
    @media (max-width: 680px) {
        font-size: 1.75rem;
        top: 10.5rem;
        left: 16.9rem;
        img {
        width: 1.5rem;
        }
    }
    @media (max-width: 510px) {
        left: 50%;
        transform: translateX(calc(-50% + 2rem));
        img {
        width: 1.5rem;
        }
    }
    @media (max-width: 325px) {
        font-size: 1.5rem;
    }
`

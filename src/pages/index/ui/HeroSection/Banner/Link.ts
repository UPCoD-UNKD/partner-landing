import styled from 'styled-components'

export const Link = styled.a`
text-decoration: none;
font-size: 1rem;
font-weight: 700;

color: #fff;
padding: 1.1875rem 3.125rem;
border: 2px solid #A9CF54;
border-radius: 50px;
text-align: center;

&:hover {
    color: #202020;
    background-color: #A9CF54;
    border-color: rgb(37, 40, 30, 0.502);
}

@media (max-width: 738px) {
    padding: 1rem 2.5rem;
}
@media (max-width: 532px) {
    padding: 0.875rem 2.6875rem;
}
`

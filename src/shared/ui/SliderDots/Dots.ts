import styled from 'styled-components'

export const Dot = styled.div`
cursor: pointer;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgb(226, 250, 173, .5);
    margin-right: 10px;

    &:last-child {
        margin-right: 0;
    }
`

export const ActiveDot = styled(Dot)`
 background: #C5FF44;
`
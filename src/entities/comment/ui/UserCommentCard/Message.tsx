import styled from 'styled-components'
import quoteIcon from 'shared/assets/img/quotes.svg'

export const Message = styled.span`
	display: flex;
  font-size: 22px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 40px;

  &::before {
  content: '';
  background: url(${quoteIcon}) no-repeat;
  display: block;
  margin-right: 15px;
  width: 65px;
  height: 20px;
}
`
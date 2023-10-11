import styled from 'styled-components';
import searchIcon from 'shared/assets/img/registrationpageicons/ic_round-search.svg'
// Стили для инпута
const Input = styled.input`
  padding-left: 42px;
  border: 1px solid #ccc;
  border-radius: 15px;
  font-size: 16px;
  width: 280px;
  height: 44px;
  position: relative;
  padding-left: 30px; /* Добавьте отступ слева для иконки */
  
  &::before {
    content: "";
    position: absolute;
    left: 10px; /* Позиционируйте иконку внутри инпута */
    top: 50%;
    transform: translateY(-50%);
    background: url(${searchIcon}) no-repeat;
    width: 24px; /* Ширина иконки */
    height: 24px; /* Высота иконки */
  }
`;


// Обертка для инпута, включая текст "Пошук"
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  color: rgba(37.20, 40.37, 30.11, 0.50);
  font-size: 18px;
  font-weight: 700;
  line-height: 19.30px;
  letter-spacing: 0.36px;
  
`;




const SearchInput = () => {
  return (
    <InputWrapper>
      <Input type="text" placeholder="Пошук" />
    </InputWrapper>
  );
};

export default SearchInput;
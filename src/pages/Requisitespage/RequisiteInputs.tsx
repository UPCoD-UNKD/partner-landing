import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 45px;
`;

const InputLabel = styled.label`
  font-weight: bold;
  margin-top: 10px;
`;

const InputField = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
  height: 36px;
  margin-bottom: 16px;
  padding: 5px;
`;

const ReqInput2 = styled.div`
    display: flex;
    flex-direction: row;
    text-align: right;
    gap: 10px;
    margin-left: 155px;
    
`
const ReqInput3 = styled.div`
    display: flex;
    flex-direction: row;
    text-align: right;
    gap: 10px;
    margin-left: 145px;
    
`
const ReqInput4 = styled.div`
    display: flex;
    flex-direction: row;
    text-align: right;
    gap: 10px;
    margin-left: 120px;
    
`
const ReqInput5 = styled.div`
    display: flex;
    flex-direction: row;
    text-align: right;
    gap: 10px;
    margin-left: -5px;
    
`
const ReqInput6 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-left: 40px;
    
`

const ReqInput8 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-left: 75px;
    
`
const ReqInput9 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-left: 120px;
    
`
const ReqInput10 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-left: 55px;
    
`
const ReqInput11 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-left: 20px;
    
`
const ReqInput12 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-left: 83px;
    
`

const Star = styled.p `
    color:red;
    margin-top: 5px;
    margin-left: 3px;
`
const ReqInput1 = styled.div `
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 20px;
    margin-left: 10px;
`

const RequisitesTable = styled.div `

`
const InputFieldSelect = styled.select `
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
  height: 36px;
  margin-bottom: 16px;
  padding: 5px;
`
const RequisiteTablesDiv = styled.div `
    display: flex;
    flex-direction: row;
    gap: 120px;
`

const RequisiteInputs = () => {
  return (
    <RequisiteTablesDiv>
        <RequisitesTable>
        <ReqInput1>
            <Star>*</Star>
            <InputLabel htmlFor="input2">Тип юридичної особи:</InputLabel>
            <InputFieldSelect id="input2">
                <option value="option1"></option>
                <option value="option2">Option 1</option>
                <option value="option3">Option 2</option>
                <option value="option4">Option 3</option>
            </InputFieldSelect>
        </ReqInput1>
        <Container>
        
        <ReqInput2>
            <Star>*</Star>
            <InputLabel htmlFor="input2">ІПН:</InputLabel>
            <InputField type="text" id="input2" />
        </ReqInput2>
        <ReqInput3>
            <Star>*</Star>
            <InputLabel htmlFor="input2">МФО:</InputLabel>
            <InputField type="text" id="input2" />
        </ReqInput3>
        <ReqInput4>
            <Star>*</Star>
            <InputLabel htmlFor="input2">ЕДРПОУ:</InputLabel>
            <InputField   id="input2" />
        </ReqInput4>
        <ReqInput5>
            <Star>*</Star>
            <InputLabel htmlFor="input2">Розрахунковий рахунок:</InputLabel>
            <InputField type="text" id="input2" />
        </ReqInput5>
        <ReqInput6>
            <Star>*</Star>
            <InputLabel htmlFor="input2">Юридична адреса:</InputLabel>
            <InputField type="text" id="input2" />
        </ReqInput6>
        
        </Container>
        </RequisitesTable>
        <RequisitesTable>
        <ReqInput1>
            <Star>*</Star>
            <InputLabel htmlFor="input2">Посада керівника:</InputLabel>
            <InputField type="text" id="input2" />
        </ReqInput1>
        <Container>
        
        <ReqInput8>
            <Star>*</Star>
            <InputLabel htmlFor="input2">Прізвище:</InputLabel>
            <InputField type="text" id="input2" />
        </ReqInput8>
        <ReqInput9>
            <Star>*</Star>
            <InputLabel htmlFor="input2">Ім'я:</InputLabel>
            <InputField type="text" id="input2" />
        </ReqInput9>
        <ReqInput10>
            <Star>*</Star>
            <InputLabel htmlFor="input2">По-батькові:</InputLabel>
            <InputField type="text" id="input2" />
        </ReqInput10>
        <ReqInput11>
            <Star>*</Star>
            <InputLabel htmlFor="input2">Поштова адреса:</InputLabel>
            <InputField type="text" id="input2" />
        </ReqInput11>
        <ReqInput12>
            <Star>*</Star>
            <InputLabel htmlFor="input2">Телефон:</InputLabel>
            <InputField type="text" id="input2" />
        </ReqInput12>
        
        </Container>
        </RequisitesTable>
    </RequisiteTablesDiv>
  );
};

export default RequisiteInputs;

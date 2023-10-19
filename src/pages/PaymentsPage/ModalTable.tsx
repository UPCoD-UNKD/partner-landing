import styled from 'styled-components'
import closeBtn from 'shared/assets/img/PaymentTable/x.svg'
const Modaltable = styled.div `
    width: 260px;
    height: 390px;
    background: #DDDFE7;
    padding: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.30);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const ModalTableHeader = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    `
const BtnClose = styled.button `
   margin-left: 230px;
   width: 14px;
   height: 14px;
`
const ModalHeaderTitle = styled.h2 `
    color: #242424;
font-size: 16px;
font-weight: 700;
line-height: 35px;
`
const ModalDate = styled.p `
    color: #242424;
font-size: 12px;
font-weight: 400;
line-height: 10px;
margin-top: 14px;
`

const Number = styled.p `
    color: #242424;
font-size: 14px;
font-weight: 700;
line-height: 7.20px;
margin-top: 5px;
`
const OrderNumber = styled.p `
    color: #242424;
    font-size: 12px;
    font-weight: 400;
    line-height: 7.85px;
    align-items: end;
    text-align: right;
`
const Tables = styled.div `
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 25px;
`

const Article = styled.div `
    padding: 7px;
    background: white; 
    box-shadow: 0px 1.1432931423187256px 0px rgba(0, 0, 0, 0.16); 
    border-radius: 2.29px;
    width: 241px;
    height: 31px;
    display: flex;
    flex-direction: row;
    gap: 10px;

    p {
        color: #25281E;
        font-size: 12px;
        font-weight: 700;
        line-height: 15px;
    }
`
const Product = styled.article `
     background: #8FA957; 
     border-radius: 1.14px;
     color: #25281E;
     padding: 3px 5px;
     align-items: center;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
`
const Quantity = styled.article `
    background: #F1F43F; 
    border-radius: 1.14px;
    color: #25281E;
     padding: 3px 5px;
     align-items: center;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
`
const Price = styled.article `
     background: #CFB2F5; 
    border-radius: 1.14px;
    color: #25281E;
     padding: 3px 5px;
     align-items: center;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
`
const Status = styled.article `
     background: #F5B2B2; 
    border-radius: 1.14px;
    color: #25281E;
     padding: 3px 5px;
     align-items: center;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
`
const Email = styled.article `
     background: #B2C1F5; 
    border-radius: 1.14px;
    color: #25281E;
     padding: 3px 5px;
     align-items: center;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
`
const Discount = styled.article `
     background: #F5DAB2; 
    border-radius: 1.14px;
    color: #25281E;
     padding: 3px 5px;
     align-items: center;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
`
const Trafic = styled.article `
     background: #72F3EC; 
    border-radius: 1.14px;
    color: #25281E;
     padding: 3px 5px;
     align-items: center;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
`
const Comission = styled.article `
     background: #FD8A02; 
    border-radius: 1.14px;
    color: #25281E;
     padding: 3px 5px;
     align-items: center;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
`
const ArticlesContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 7px;
`
const ModalTable = () => {
  return (
    <Tables>
    <Modaltable>
        <BtnClose>
            <img src={closeBtn} alt="" />
        </BtnClose>
        <ModalTableHeader>
            <ModalHeaderTitle>Продаж 1</ModalHeaderTitle>
            <ModalDate>23-09-2023</ModalDate>
            <OrderNumber>Номер<br /> замовлення:<br /><Number>12345</Number></OrderNumber>
        </ModalTableHeader>
        <ArticlesContainer>
            <Article>
                <Product>
                    Назва товару
                </Product>
                <p>Продукт А</p>
            </Article>
            <Article>
                <Quantity>
                    Кількість
                </Quantity>
                <p>2</p>
            </Article>
            <Article>
                <Price>
                    Ціна за одиницю
                </Price>
                <p>700</p>
            </Article>
            <Article>
                <Status>
                    Статус замовлення
                </Status>
                <p>Оплачено</p>
            </Article>
            <Article>
                <Email>
                    Email клієнта

                </Email>
                <p>test@gmail.com</p>
            </Article>
            <Article>
                <Discount>
                    Знижка/Акція
                </Discount>
                <p> 10% знижка</p>
            </Article>
            <Article>
                <Trafic>
                    Трафік
                </Trafic>
                <p>Facebook</p>
            </Article>
            <Article>
                <Comission>
                    Сума комісії
                </Comission>
                <p>20₴</p>
            </Article>
        </ArticlesContainer>
    </Modaltable>
    <Modaltable>
        <BtnClose>
            <img src={closeBtn} alt="" />
        </BtnClose>
        <ModalTableHeader>
            <ModalHeaderTitle>Продаж 1</ModalHeaderTitle>
            <ModalDate>23-09-2023</ModalDate>
            <OrderNumber>Номер<br /> замовлення:<br /><Number>12345</Number></OrderNumber>
        </ModalTableHeader>
        <ArticlesContainer>
            <Article>
                <Product>
                    Назва товару
                </Product>
                <p>Продукт Б</p>
            </Article>
            <Article>
                <Quantity>
                    Кількість
                </Quantity>
                <p>2</p>
            </Article>
            <Article>
                <Price>
                    Ціна за одиницю
                </Price>
                <p>700</p>
            </Article>
            <Article>
                <Status>
                    Статус замовлення
                </Status>
                <p>Оплачено</p>
            </Article>
            <Article>
                <Email>
                    Email клієнта

                </Email>
                <p>test@gmail.com</p>
            </Article>
            <Article>
                <Discount>
                    Знижка/Акція
                </Discount>
                <p> 10% знижка</p>
            </Article>
            <Article>
                <Trafic>
                    Трафік
                </Trafic>
                <p>Facebook</p>
            </Article>
            <Article>
                <Comission>
                    Сума комісії
                </Comission>
                <p>22₴</p>
            </Article>
        </ArticlesContainer>
    </Modaltable>
    </Tables>
  )
}

export default ModalTable
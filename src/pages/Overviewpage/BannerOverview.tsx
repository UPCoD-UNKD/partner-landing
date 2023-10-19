import styled from 'styled-components'
import allSells from 'shared/assets/img/overviewtable/allsells.png'
import allLinks from 'shared/assets/img/overviewtable/alllinks.png'
import clientsOverall from 'shared/assets/img/overviewtable/clientsoverall.png'
import arrow from 'shared/assets/img/overviewtable/icons.png'
const TablesContainer = styled.div `
    display: flex;
    flex-direction: row;
    gap: 14px;
    margin-left: 165px;
    margin-top: 28px;
`
const TableContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 230px;
    height: 145px;
    padding: 15.7px 37.5px 20.93px 15.7px;
    background: rgba(201.88, 201.88, 201.88, 0.18); 
    border-radius: 12.21px; 
    border: 0.50px #A09D9D solid;
`
const TableHeading = styled.h2 `
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
`

const TableBody = styled.p `
    color: #669005;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0.24px;
    margin-top: 10px;
    margin-left: 15px;
`

const TableBodyLinks = styled.p `
    color: #3A6597;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0.24px;
    margin-top: 10px;
    margin-left: 15px;
`

const TableFooter = styled.p `
    color: #797979;
    font-size: 12.21px;
    font-weight: bold;
    text-transform: lowercase;
    margin-top: 8px;
    margin-left: 15px;
`
const TextHelper = styled.p `
    color: #797979;
    font-size: 12.21px;
    font-weight: bold;
`

const MainText = styled.p `
    color: #202020;
    font-size: 19.46px;
    font-weight: bold;
    letter-spacing: 0.19px;
    display: flex;
    flex-direction: row;
    margin-top: 3px;
`
const TableBodyClients= styled.div `
      color: #3A6597;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0.24px;
    margin-top: 10px;

`
const LowerText = styled.p `
    color: #202020;
    font-size: 11.12px;
    font-weight: bold;
    letter-spacing: 0.44px;
    margin-top: 7px;
    margin-left: 5px;
`
const TableFooterClients = styled.div`
    color: #202020;
    font-size: 10.72px;
    font-weight: 400;
    line-height: 10.47px;
    letter-spacing: 0.17px;
    margin-top: 3px;
    text-align: start;
`
const BannerOverview = () => {
  return (
    <TablesContainer>
        <TableContainer>
            <TableHeading>
                <img src={allSells} alt="" />
                Ваші продажі
            </TableHeading>
            <TableBody>
                0 $
            </TableBody>
            <TableFooter>
            за останні 30 днів
            </TableFooter>
        </TableContainer>
        <TableContainer>
            <TableHeading>
                <img src={allLinks} alt="" />
                Всі URL-адреси
            </TableHeading>
            <TableBodyLinks>
                0 
            </TableBodyLinks>
            <TableFooter>
            за останні 30 днів
            </TableFooter>
        </TableContainer>
        <TableContainer>
            <TableHeading>
                <img src={clientsOverall} alt="" />
                Усього клієнтів
            </TableHeading>
            <TableBodyClients>
                <TextHelper>
                    Ресурси
                </TextHelper>
                <MainText>
                    101 
                    <LowerText>/120</LowerText>
                </MainText>
            </TableBodyClients>
            <TableFooterClients>
                <img src={arrow} alt="" />
            2% зростання порівняно з минулим місяцем
            </TableFooterClients>
        </TableContainer>
    </TablesContainer>
  )
}

export default BannerOverview
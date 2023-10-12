import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid #000;
  z-index: 999;
  margin-left: 10px;
  margin-top: 5px;
`;

const TableCell = styled.td`
  border: 1px solid #E1E2E2;
  width: 51px;
  height: 27px;
  text-align: center;
  background-color:white ;
`;

const TableContainer = styled.div `
    width: 750px;
    height: 335px;
    background: rgba(102, 144, 5, 0.50);
    border-radius: 5px;
    margin-top: -70px;
    margin-left: 112px;
`

const TableHeader = styled.h2 `
    color: #202020;
    font-size: 22px;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 318px;
    margin-top: 9px;
    gap: 100px;
`

const TableExtraText = styled.p `
    color: #646464;
    font-size: 9.53px;
    font-family: Fontin Sans CR;
    font-weight: 400;
    text-transform: lowercase;
    display: flex;
    flex-direction: row;
    gap: 16px;
`

const TableDates = styled.div `
    margin-left: 32px;
`

const TableCellDate = styled.td `
    height: 10px;
    color: #646464;
font-size: 6.37px;
font-weight: 400;
background: transparent;
padding: 9.37px;
`

const generateTable = (rows: number, columns: number) => {
  const table = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row.push(<TableCell key={j}></TableCell>);
    }
    table.push(<tr key={i}>{row}</tr>);
  }

  return table;
};

const generateDateRow = (columns: number) => {
    const dates = [];
  
    for (let i = 1; i <= columns; i++) {
      dates.push(
        <TableCellDate key={i}>
          {i}.10.2023
        </TableCellDate>
      );
    }
  
    return <tr>{dates}</tr>;
  };
const App = () => {
  const rows = 10;
  const columns = 14;

  return (
    <TableContainer>
        <TableHeader>
            Всі кліки
            <TableExtraText>
                <p>Всього кліків</p>
                <p>кліків За  30 днів</p>
                <p>всього Платежів </p>           
            </TableExtraText>
        </TableHeader>
        <Table>
        <tbody>{generateTable(rows, columns)}</tbody>
        </Table>
        
        <TableDates>
        {generateDateRow(columns)}
        </TableDates>
    </TableContainer>
  );
};

export default App;

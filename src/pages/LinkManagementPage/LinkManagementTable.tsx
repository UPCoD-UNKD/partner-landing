import  { useState } from 'react';
import styled from 'styled-components';
import trashBin from 'shared/assets/img/Trash bin.svg'; // Путь к вашей картинке

const Table = styled.table`
  width: 90%;
  border-collapse: collapse;
  margin-left: 111px;
  margin-top: 25px;
  box-shadow: 0px 1.25px 8px rgba(0, 0, 0, 0.25);
`;

const TableRow = styled.tr`
  background-color: transparent;
`;

const TableHeaderCell = styled.th`
    padding: 14px 9px;
    border: 1px solid #ddd;
    text-align: center;
    cursor: pointer;
    color: #25281E;
    font-size: 14.72px;
    font-weight: 700;
    text-align: left;
    background: #F7F8FA;
`;

const TableCell = styled.td`
    padding: 12px 9px;
    border: 1px solid #ddd;
    text-align: center;
    cursor: pointer;
    color: #222222;
    font-size: 13.45px;
    font-weight: 400;
    text-align: left;
`;

const Image = styled.img`
  width: 12px;
  height: 12px;
  &:hover {
    transform: scale(1.5);
    transition: 0ms.1s ease-in;
  }
`;

const data = [
  ['Посилання', 'Офер', 'Напрямок майданчика', 'Статус', 'Коментар', ''],
  ['example.com', 'AliExpress', 'YouTube - канал', 'Дозволено', 'При виконанні умов партнерської програми', 'image'],
  ['example.com', 'AliExpress', 'YouTube - канал', 'Дозволено', 'При виконанні умов партнерської програми', 'image'],
  ['example.com', 'AliExpress', 'YouTube - канал', 'Дозволено', 'При виконанні умов партнерської програми', 'image'],
  ['example.com', 'AliExpress', 'YouTube - канал', 'Дозволено', 'При виконанні умов партнерської програми', 'image'],
  ['example.com', 'AliExpress', 'YouTube - канал', 'Дозволено', 'При виконанні умов партнерської програми', 'image'],
  ['example.com', 'AliExpress', 'YouTube - канал', 'Дозволено', 'При виконанні умов партнерської програми', 'image'],
  ['example.com', 'AliExpress', 'YouTube - канал', 'Дозволено', 'При виконанні умов партнерської програми', 'image'],
  ['example.com', 'AliExpress', 'YouTube - канал', 'Дозволено', 'При виконанні умов партнерської програми', 'image'],
  ['example.com', 'AliExpress', 'YouTube - канал', 'Дозволено', 'При виконанні умов партнерської програми', 'image'],

];

const LinkManagementTable = () => {
  const [tableData, setTableData] = useState(data);

  const handleImageClick = (rowIndex: number) => {
    const updatedData = [...tableData];
    updatedData.splice(rowIndex, 1);
    setTableData(updatedData);
  };

  return (
    <Table>
      <thead>
        <TableRow>
          {data[0].map((header, cellIndex) => (
            <TableHeaderCell key={cellIndex}>{header}</TableHeaderCell>
          ))}
        </TableRow>
      </thead>
      <tbody>
        {tableData.slice(1).map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>
                {cell === 'image' ? (
                  <Image
                    src={trashBin}
                    alt="Delete"
                    onClick={() => handleImageClick(rowIndex + 1)}
                  />
                ) : (
                  cell
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default LinkManagementTable;

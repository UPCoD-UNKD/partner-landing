import  { useEffect, useState } from 'react';
import styled from 'styled-components';

interface TableData {
  id: number;
  name: string;
  status: string;
  orderDate: string;
  orderAmount: string;
  responsible: string;
  website: string;
}

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid #000;
  margin-top: 20px;
  margin-left: 109px;
`;

const TableCell = styled.td`
  border: 1px solid #E1E2E2;
  padding: 8px 18px;
  text-align: center;
  color: #5C624F;
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
`;

const TableContainer = styled.div`
  width: 100%;
  height: 404px;
`;

const TableHeaderCell = styled.th`
  border: 1px solid #E1E2E2;
  padding: 8px 18px;
  text-align: center;
  color: #5C624F;
  font-size: 14px;
  font-weight: 700;
  line-height: 15px;
`;

const ClientsTable = ({ data }: { data: TableData[] }) => {
  const headers = [
    'ID',
    'Ім`я',
    'Статус',
    'Дата замовлення',
    'Сума замовлення',
    'Відповідальний',
    'Сайт',
  ];

  
  const [,setFilteredData] = useState<TableData[]>(data);
  
  const filterData = (filters: { status: string }) => {
    let filtered = data;

    if (filters.status !== 'all') {
      filtered = data.filter(item => item.status === filters.status);
    }

    setFilteredData(filtered);
  };

  useEffect(() => {
    filterData({ status: 'all' }); 
  }, [data]);

  
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <TableHeaderCell key={index}>{header}</TableHeaderCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              <TableCell>{rowData.id}</TableCell>
              <TableCell>{rowData.name}</TableCell>
              <TableCell>{rowData.status}</TableCell>
              <TableCell>{rowData.orderDate}</TableCell>
              <TableCell>{rowData.orderAmount}</TableCell>
              <TableCell>{rowData.responsible}</TableCell>
              <TableCell>{rowData.website}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default ClientsTable;

import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin: 10px;
  width: 201px;
  height: 219px;
  background: #F8FFEA;
  border-radius: 19.33px;
`;

const Image = styled.img`
  width: 87px;
  height: 87px;
  border-radius: 50%;
  margin-top: 10px;
`;

const Name = styled.p`
  color: black;
  font-size: 14px;
  font-weight: 700;
  margin-top: 10px;
`;

const Email = styled.p`
  color: black;
  font-size: 12px;
  font-weight: 400;
  margin-top: 4px;
`;

const AddButton = styled.button`
  color: #669005;
  font-size: 13px;
  font-weight: 700;
  padding: 10px 55px;
  cursor: pointer;
  background: #D2DDB8;
  border-radius: 19.33px;
`;

interface CandidateProps {
  name: string;
  email: string;
  image: string;
  onAddClick: () => void;
}

const CandidateCard: React.FC<CandidateProps> = ({ name, email, image, onAddClick }) => {
    return (
      <Card>
        <Image src={image} alt={name} />
        <Name>{name}</Name>
        <Email>{email}</Email>
        <AddButton onClick={onAddClick}>Add</AddButton>
      </Card>
    );
  };
  
  
  
  
  
  
  

export default CandidateCard;

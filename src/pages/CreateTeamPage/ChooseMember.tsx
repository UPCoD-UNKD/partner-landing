import SideMenu from 'pages/Sidemenu/SideMenu';
import Navbar from 'shared/ui/navbar/Navbar';
import { useState } from 'react';
import WarningTable from 'shared/ui/warningtable/WarningTable';
import styled from 'styled-components';
import userImg1 from 'shared/assets/img/TeamMembers/Ellipse 6.svg';
import userImg2 from 'shared/assets/img/TeamMembers/Ellipse 6 (1).svg';
import userImg3 from 'shared/assets/img/TeamMembers/Ellipse 6 (2).svg';
import userImg4 from 'shared/assets/img/TeamMembers/Ellipse 6 (3).svg';
import userImg5 from 'shared/assets/img/TeamMembers/Ellipse 6 (1).svg';
import addMember from 'shared/assets/img/TeamMembers/Group.svg';
import closeIcon from 'shared/assets/img/TeamMembers/close_111152.png'
import Modal from './ModalMembers';
import CandidateCard from './CandidateCard';

const ChooseMemberContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const MemberContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const MemberHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 111px;
  margin-top: 47px;
  justify-content: space-between;
  color: black;
  font-size: 22px;
  font-weight: 700;
`;

const CandidatesRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 20px;
`;

const HelperText = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  color: #D5D6D7;
  font-size: 12px;
  font-weight: 700;
  margin-right: 130px;
`;

const ProjectName = styled.p`
  color: #6C7172;
  font-size: 14px;
  font-weight: 400;
`;

const MemberCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 111px;
  gap: 36px;
  margin-top: 40px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const MemberCard = styled.div`
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
  position: relative;
`;

const MemberImage = styled.img`
  width: 87px;
  height: 87px;
  border-radius: 50%;
  margin-top: 10px;
`;

const MemberName = styled.p`
  color: black;
  font-size: 14px;
  font-weight: 700;
  margin-top: 10px;
`;

const MemberEmail = styled.p`
  color: black;
  font-size: 12px;
  font-weight: 400;
  margin-top: 4px;
`;

const ViewProfileButton = styled.button`
  color: #669005;
  font-size: 13px;
  font-weight: 700;
  padding: 10px 55px;
  cursor: pointer;
  background: #D2DDB8;
  border-bottom-left-radius: 19.33px;
  border-bottom-right-radius: 19.33px;
  margin-top: 32px;
  width: 202px;
`;

const ModalContainer = styled.div`
  max-height: 80vh;
  overflow-y: auto;
`;

const AddMemberImg = styled.img`
  width: 45px;
  height: 45px;
  margin-top: 20px;
`;

const AddMemberCard = styled(MemberCard)`
  background: #F8FFEA;
  width: 201px;
  height: 219px;
  align-items: center;
`;

const AddMemberButton = styled(ViewProfileButton)`
  color: #A9CF54;
  font-size: 15.5px;
  font-weight: 400;
  line-height: 25.66px;
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  align-items: center;
`;

const ModalHeader = styled.h1`
  color: black;
  font-size: 22px;
  font-weight: 700;
  margin-left: 15px;
  margin-top: 10px;
`;

const DeleteIcon = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

interface Member {
  name: string;
  email: string;
  image: string;
}

const ChooseMember = () => {
  const [teamMembers, setTeamMembers] = useState<Member[]>([
    {
      name: 'Ольга Петренко',
      email: 'jenner.kyle.123@gmail.com',
      image: userImg1,
    },
    {
      name: 'Іван Павленко',
      email: 'kale.the.robert@gmail.com',
      image: userImg2,
    },
    {
      name: 'Олександр Сидоренко',
      email: 'jane.smith@example.com',
      image: userImg3,
    },
    {
      name: 'Михайло Григоренко',
      email: 'jane.smith@example.com',
      image: userImg5,
    },
    {
      name: 'Тетяна Коваленко',
      email: 'jane.smith@example.com',
      image: userImg4,
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const candidates: Member[] = [
    {
      name: 'Петро Іванов',
      email: 'example@gmail.com',
      image: userImg2,
    },
    {
      name: 'Ольга Шевченко',
      email: 'example@gmail.com',
      image: userImg4,
    },
    {
      name: 'Василь Іванов',
      email: 'example@gmail.com',
      image: userImg5,
    },
    {
      name: 'Тетяна Шевченко',
      email: 'example@gmail.com',
      image: userImg1,
    },
    {
      name: 'Ольга Григоренко',
      email: 'example@gmail.com',
      image: userImg4,
    },
    {
      name: 'Петро Шевченко',
      email: 'example@gmail.com',
      image: userImg3,
    },
    {
      name: 'Петро Шевченко',
      email: 'example@gmail.com',
      image: userImg3,
    },
    {
      name: 'Петро Шевченко',
      email: 'example@gmail.com',
      image: userImg3,
    },
    {
      name: 'Петро Шевченко',
      email: 'example@gmail.com',
      image: userImg3,
    },
  ];

  const addCandidateToTeam = (candidate: Member) => {
    setTeamMembers([...teamMembers, candidate]);
  };

  const deleteMember = (memberToDelete: Member) => {
    const updatedTeamMembers = teamMembers.filter((member) => member !== memberToDelete);
    setTeamMembers(updatedTeamMembers);
  };

  return (
    <div>
      <Navbar />
      <ChooseMemberContainer>
        <SideMenu />
        <MemberContent>
          <WarningTable />
          <MemberHeader>
            Команда
            <HelperText>
              проєкт
              <ProjectName>Uplabs</ProjectName>
            </HelperText>
          </MemberHeader>
          <MemberCardContainer>
            {teamMembers.map((member, index) => (
              <MemberCard key={index}>
                <DeleteIcon
                  src={closeIcon}
                  alt="Delete"
                  onClick={() => deleteMember(member)}
                />
                <MemberImage src={member.image} alt={member.name} />
                <MemberName>{member.name}</MemberName>
                <MemberEmail>{member.email}</MemberEmail>
                <ViewProfileButton>View Profile</ViewProfileButton>
              </MemberCard>
            ))}
            <AddMemberCard>
              <AddMemberButton onClick={openModal}>
                <AddMemberImg src={addMember} alt="" />
                Add Member
              </AddMemberButton>
            </AddMemberCard>
          </MemberCardContainer>
        </MemberContent>
      </ChooseMemberContainer>

      <Modal show={showModal} handleClose={closeModal}>
        <ModalHeader>Кандидати</ModalHeader>
        <ModalContainer>
          <CandidatesRow>
            {candidates.map((candidate, index) => (
              <CandidateCard
                key={index}
                name={candidate.name}
                email={candidate.email}
                image={candidate.image}
                onAddClick={() => {
                  addCandidateToTeam(candidate);
                  closeModal(); 
                }}
              />
            ))}
          </CandidatesRow>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default ChooseMember;



import React from 'react';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import profileImg from '../../assets/profile.jpg';

import { Header, Content, ProfileContainer } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Header>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <ProfileContainer>
          <img className="profile-pic" src={profileImg} alt="profile" />

          <div>
            <h1>Bem vindo,</h1>
            <span>Carlos Cordeiro</span>
          </div>
        </ProfileContainer>

        <Link to="/">
          <FiPower size={20} />
        </Link>
      </Content>
    </Header>
  );
};

export default Dashboard;

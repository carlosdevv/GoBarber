import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  background-color: #28262e;
  padding: 30px 150px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  > img {
    height: 100px;
  }

  a {
    margin-left: auto;

    svg {
      color: #666360;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#c53030')};
      }
    }
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  .profile-pic {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin-left: 80px;
  }

  div {
    margin-left: 15px;

    h1 {
      color: #666360;
      font-size: 16px;
      line-height: 30px;
    }

    span {
      color: #ff9000;
    }
  }
`;

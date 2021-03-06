import React from 'react';
import styled from 'styled-components';
import Video from '../videos/FooterVideo2.mp4';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';

const MainContainer = styled.div`
  display: block;
  color: whitesmoke;
`;

const Background = styled.div``;

const VideoBg = styled.video`
  position: absolute;
  object-fit: cover;
  z-index: -1;
  width: 100%;
  height: 350px;
  @media screen and (max-width: 480px) {
    height: 250px;
  }
`;

const Content = styled.div`
  position: relative;
  padding: 32px;
  h1 {
    font-size: clamp(1.5rem, 6vw, 2rem);

    padding: 32px;
    text-align: center;
    @media screen and (max-width: 480px) {
      padding: 16px;
    }
  }
  @media screen and (max-width: 480px) {
    padding: 16px;
  }
`;

const ButtonContainer = styled.div`
  padding: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

const Icon = styled.div`
  display: inline-grid;

  font-size: 50px;

  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
    color: #b44d2e;

    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    padding-bottom: 10px;
    font-size: 40px;
  }
`;

const Footer = () => {
  return (
    <MainContainer id='footer'>
      <Background>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </Background>
      <Content>
        <h1>Contact Me</h1>
        <ButtonContainer>
          <Icon>
            <FaGithubSquare
              onClick={() => {
                window.location = 'https://github.com/RaymondNimalan';
              }}
            />
          </Icon>
          <Icon>
            <FaLinkedin
              onClick={() => {
                window.location =
                  'https://www.linkedin.com/in/raymond-nimalan/';
              }}
            />
          </Icon>
          <Icon>
            <ImMail
              onClick={() => {
                window.location = 'mailto:raymondnimalan@gmail.com';
              }}
            />
          </Icon>
        </ButtonContainer>
      </Content>
    </MainContainer>
  );
};

export default Footer;

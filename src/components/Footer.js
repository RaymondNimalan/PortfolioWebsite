import React from 'react';
import styled from 'styled-components';
import Video from '../videos/FooterVideo2.mp4';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';

const MainContainer = styled.div`
position: relative;
  color: whitesmoke;
height: auto;
  width: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;
  z-index: 2;
  overflow: hidden;
`;

const Background = styled.div`
position: absolute;
height: 350px;
width: 100%;
`;

const VideoBg = styled.video`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 350px;
  z-index: -1;
  @media screen and (max-width: 480px) {
    height: 350px;
  }
`;

const Content = styled.div`
  position: flex;
  justify-self: center;
  width: 100%;
  max-width: 500px;
  padding: 32px;

  h1 {
    font-size: clamp(1.5rem, 6vw, 2rem);

    padding: 32px;
    text-align: center;
    padding: 20px;
  background: rgba(255, 255, 255, 0.2); /* Semi-transparent white background */
  backdrop-filter: blur(10px); /* Blurs the background behind */
  border-radius: 10px; /* Optional: Rounded corners */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7),
               0px 0px 10px rgba(0, 0, 0, 0.5);
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

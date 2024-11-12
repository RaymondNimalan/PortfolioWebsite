import React from 'react';
import styled from 'styled-components';
import Video from '../videos/LandingVideo.mp4';

const MainContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  //height: 100%;
  position: relative;
  z-index: 1;
  height: 100vh;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #232a34;
`;

const Content = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2); /* Semi-transparent white background */
  backdrop-filter: blur(10px); /* Blurs the background behind */
  border-radius: 10px; /* Optional: Rounded corners */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7),
               0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const Name = styled.div`
  color: #fff;
  font-size: 56px;
  padding-bottom: 8px;
  text-align: center;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7), /* Primary shadow */
               0px 0px 10px rgba(0, 0, 0, 0.5); /* Glow effect */
  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
`;

const Intro = styled.div`
  color: #fff;
  font-size: 30px;
  text-align: center;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7), /* Primary shadow */
               0px 0px 10px rgba(0, 0, 0, 0.5); /* Glow effect */
  @media screen and (max-width: 768px) {
    font-size: 20 px;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

const IntroTwo = styled.div`
  color: #fff;
  font-size: 48px;
  padding-top: 8px;
  text-align: center;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7), /* Primary shadow */
               0px 0px 10px rgba(0, 0, 0, 0.5); /* Glow effect */
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const Button = styled.div``;

const Landing = () => {
  return (
    <MainContainer id='home'>
      <Background>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </Background>
      <Content>
        <Name>Hi, I'm Ray</Name>
        <Intro>Welcome to my Portfolio Website</Intro>
        <IntroTwo>Software Engineer</IntroTwo>
        <Button></Button>
      </Content>
    </MainContainer>
  );
};

export default Landing;

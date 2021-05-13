import React from 'react';
import styled from 'styled-components';
import Video from '../videos/LandingVideo.mp4';

const MainContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 825px;
  //height: 100%;
  position: relative;
  z-index: 1;
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
`;

const Name = styled.div`
  color: #fff;
  font-size: 56px;
  padding-bottom: 8px;
  text-align: center;
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
        <IntroTwo>I'm a Software Engineer</IntroTwo>
        <Button></Button>
      </Content>
    </MainContainer>
  );
};

export default Landing;

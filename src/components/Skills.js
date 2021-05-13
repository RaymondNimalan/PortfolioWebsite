import React from 'react';
import styled from 'styled-components';
import { skillsData } from '../data/SkillsData';
import Video from '../videos/SkillsVideo.mp4';

const MainContainer = styled.div`
  color: whitesmoke;
  //height: 825px;
  h1 {
    font-size: clamp(1.5rem, 6vw, 2rem);
    position: relative;
    padding-left: 32px;
    padding-top: 32px;
    /* @media screen and (max-width: 480px) {
      font-size: 24px;
    } */
  }
`;

const Background = styled.div`
  z-index: -1;
`;

const VideoBg = styled.video`
  width: 100%;
  height: 75%;
  object-fit: cover;
  position: absolute;
  //padding-top: 32px;
  //padding-bottom: 32px;
  //z-index: -1;
`;
const SkillsGrid = styled.div`
  z-index: 2;
  display: grid;
  grid-auto-flow: row;
  position: sticky;
  margin-top: 20px;
  margin-bottom: 20px;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 1fr 1fr 1fr;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const GridItem = styled.div`
  display: inline-grid;
  text-align: center;
  justify-content: center;
  font-size: 20px;
  padding: 30px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 310px) {
    font-size: 10px;
    padding: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
const Icon = styled.div`
  font-size: 40px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
  @media screen and (max-width: 310px) {
    font-size: 15px;
  }
`;

const Skills = () => {
  return (
    <MainContainer id='skills'>
      <Background>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </Background>
      <h1>Skills</h1>
      <SkillsGrid>
        {skillsData.map((item, index) => (
          <GridItem key={index}>
            <Icon>{item.image}</Icon>
            <h2>{item.name}</h2>
          </GridItem>
        ))}
      </SkillsGrid>
    </MainContainer>
  );
};

export default Skills;

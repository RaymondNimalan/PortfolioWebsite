import React from 'react';
import styled from 'styled-components';
import { skillsData } from '../data/SkillsData';
import Video from '../videos/SkillsVideo.mp4';

const MainContainer = styled.div`
position: relative;
  color: whitesmoke;
  width: 100%;
  height: auto;
  justify-content: center; 
  align-items: center;
  overflow: hidden;

`;

// const Background = styled.div`
// position: absolute;
// width: 100%;
// z-index: 2;

// width: 100%;
// height: 100%;
// `;

const VideoBg = styled.video`
  position: absolute;
  object-fit: cover;
width: 100%;
height: 700px;
  z-index: 3;
  @media screen and (max-width: 768px) {
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
height: 100%;
  justify-self: center;
  max-width: 1000px;
  justify-self: center;
  z-index: 3;
  h1 {
    font-size: clamp(1.5rem, 6vw, 2rem);
    padding-left: 32px;
    padding-top: 32px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 25% 25% 25% 25%;
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
  h2 {
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7),
    0px 0px 10px rgba(0, 0, 0, 0.5);
  }
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
  /* text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7),
   0px 0px 10px rgba(0, 0, 0, 0.5); */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7), 
               0px 0px 10px rgba(0, 0, 0, 0.5); /* Shadow effect on icons */
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
      {/* <Background>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </Background> */}
      <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      <Content>
        <h1>Skills</h1>
        <SkillsGrid>
          {skillsData.map((item, index) => (
            <GridItem key={index}>
              <Icon>{item.image}</Icon>
              <h2>{item.name}</h2>
            </GridItem>
          ))}
        </SkillsGrid>
      </Content>
    </MainContainer>
  );
};

export default Skills;

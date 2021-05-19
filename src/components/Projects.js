import React from 'react';
import styled from 'styled-components';
import { projectData } from '../data/ProjectData';
import { FaGithubAlt } from 'react-icons/fa';
import { TiHomeOutline } from 'react-icons/ti';

const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background: black;
  h1 {
    font-size: clamp(1.5rem, 6vw, 2rem);
    color: whitesmoke;
    position: relative;
    padding-left: 32px;
    padding-top: 32px;
    padding-bottom: 16px;
  }
  @media screen and (max-width: 768px) {
    padding: 1rem 0rem;
  }
`;
const Container = styled.div`
  background: black;
  padding: 1rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 300px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;
const ColumnLeft = styled.div`
  background: #2e2927;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 3rem;
  order: ${({ reverse }) => (reverse ? '2' : '1')};

  h2 {
    color: #b44d2e;
    font-size: 28px;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    //color: #b44d2e;
    color: whitesmoke;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    h2 {
      text-align: center;
    }
  }
`;
const ColumnRight = styled.div`
  //padding: 1rem 2rem;
  background: #2e2927;
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media screen and (max-width: 768px) {
      width: 75%;
      height: 300px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: #b44d2e;
  font-size: 32px;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
`;

const Icon = styled.div`
  display: inline-grid;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
    color: whitesmoke;
  }
`;

const Projects = () => {
  return (
    <Section id='projects'>
      <h1>Projects</h1>
      {projectData.map((item, index) => (
        <Container key={index}>
          <ColumnRight reverse={item.reverse}>
            <img src={item.image} alt='images' />
          </ColumnRight>
          <ColumnLeft>
            <h2>{item.title}:</h2>
            <p>{item.about1}</p>
            <p>{item.about2}</p>
            <ButtonContainer>
              <Icon>
                <FaGithubAlt
                  onClick={() => {
                    window.location = `${item.githubUrl}`;
                  }}
                />
              </Icon>
              <Icon>
                <TiHomeOutline
                  onClick={() => {
                    window.location = `${item.websiteUrl}`;
                  }}
                />
              </Icon>
            </ButtonContainer>
          </ColumnLeft>
        </Container>
      ))}
    </Section>
  );
};

export default Projects;

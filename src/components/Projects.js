import React from 'react';
import styled from 'styled-components';
import { projectData } from '../data/ProjectData';
import { FaGithubAlt } from 'react-icons/fa';
import { TiHomeOutline } from 'react-icons/ti';

const Section = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 32px;
  background: black;
  max-width: 1000px;
  justify-self: center;
  justify-content: center;
  h1 {
    font-size: clamp(1.5rem, 6vw, 2rem);
    color: whitesmoke;
    padding: 0px 0px 0px 32px;
  }
  @media screen and (max-width: 768px) {
  }
`;
const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-self: center;
  background: #2e2927;
  border-radius: 8px;
  margin: 16px;
  grid-template-rows: 300px;
  @media screen and (max-width: 768px) {
flex-direction: column;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  line-height: 1.4;
  padding: 1rem 3rem;
  border-radius: 8px;
  order: ${({ reverse }) => (reverse ? '2' : '1')};

  h2 {
    color: #b44d2e;
    font-size: 28px;
    margin-bottom: 1rem;
    @media screen and (max-width: 480px) {
      font-size: 24px;
    }
    @media screen and (max-width: 310px) {
      font-size: 20px;
    }
  }

  p {
    margin-bottom: 1rem;
    //color: #b44d2e;
    color: whitesmoke;
    @media screen and (max-width: 480px) {
      font-size: 14px;
    }
    @media screen and (max-width: 310px) {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    h2 {
      text-align: center;
    }
  }
`;
const ColumnRight = styled.div`
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 400px;
margin: auto;

  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 4px;
/* 
    @media screen and (max-width: 768px) {
      width: 75%;
    }
    @media screen and (max-width: 480px) {
      width: 75%;
    } */
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

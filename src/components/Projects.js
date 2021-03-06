import React from 'react';
import styled from 'styled-components';
import { projectData } from '../data/ProjectData';
import { FaGithubAlt } from 'react-icons/fa';
import { TiHomeOutline } from 'react-icons/ti';

const Section = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem 0rem;
  padding-top: 32px;
  background: black;
  h1 {
    font-size: clamp(1.5rem, 6vw, 2rem);
    color: whitesmoke;
    position: relative;
    padding: 0px 0px 0px 32px;
  }
`;
const Container = styled.div`
  width: 100%;
  background: black;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 300px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  background: #2e2927;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.4;
  padding: 1rem 3rem;
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
    @media screen and (max-width: 480px) {
      width: 75%;
      height: 200px;
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

import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { projectData } from '../data/ProjectData';
const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  h1 {
    position: absolute;
    padding-left: 32px;
  }
`;
const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 400px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '2' : '1')};

  h2 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const Projects = () => {
  return (
    <Section>
      <h1>Projects</h1>
      {projectData.map((item, index) => (
        <Container>
          <ColumnLeft>
            <h2>{item.title}</h2>
            <p>{item.about1}</p>
            <p>{item.about2}</p>
            {/* <Button to='/' primary='true'>
                {buttonLabel}{' '}
              </Button> */}
          </ColumnLeft>
          <ColumnRight reverse={item.reverse}>
            <img src={item.image} alt='images' />
          </ColumnRight>
        </Container>
      ))}
    </Section>
  );
};

export default Projects;

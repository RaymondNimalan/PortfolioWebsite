import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { projectData } from '../data/ProjectData';
const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background: black;
  h1 {
    color: whitesmoke;
    position: sticky;
    padding-left: 32px;
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;
const Container = styled.div`
  background: black;
  padding: 1rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 250px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnRight = styled.div`
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
const ColumnLeft = styled.div`
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

const Projects = () => {
  return (
    <Section>
      <h1>Projects</h1>
      {projectData.map((item, index) => (
        <Container>
          <ColumnLeft reverse={item.reverse}>
            <img src={item.image} alt='images' />
          </ColumnLeft>
          <ColumnRight>
            <h2>{item.title}:</h2>
            <p>{item.about1}</p>
            <p>{item.about2}</p>
            {/* <Button to='/' primary='true'>
                {buttonLabel}{' '}
              </Button> */}
          </ColumnRight>
        </Container>
      ))}
    </Section>
  );
};

export default Projects;

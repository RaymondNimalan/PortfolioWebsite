import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 50px;
  //display: flex;
  margin-top: 20px;
  position: relative;
`;

const Project = styled.div``;

const Projects = () => {
  return (
    <MainContainer>
      <Project>Hello</Project>
    </MainContainer>
  );
};

export default Projects;

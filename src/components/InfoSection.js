import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px;
  display: relative;
  flex-direction: column;
  max-width: 1000px;
  justify-items: center;
  justify-self: center;
  h1 {
    width: 100%;
    margin-bottom: 32px;
    align-self: start;
    color: whitesmoke;
    font-size: clamp(1.5rem, 6vw, 2rem);
    padding: 0px 16px;
  }
`;
const Container = styled.div`
  display: grid;


  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 75%;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  order: ${({ reverse }) => (reverse ? '2' : '1')};
  p {
    color: whitesmoke;

    margin-top: 2rem;
    @media screen and (max-width: 768px) {
    }
  }
  @media screen and (max-width: 768px) {
    order: 2;
  }
`;
const ColumnRight = styled.div`
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
    padding-bottom: 0px;
  }

  img {
    max-height: 400px;
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media screen and (max-width: 768px) {
    }
  }
`;

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  reverse,
  image,
}) => {
  return (
    <Section id='about'>
      <h1>{heading}</h1>
      <Container>
        <ColumnLeft>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt='images' />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;

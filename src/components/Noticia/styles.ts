import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  padding-left: 0rem;
  overflow: auto;
  flex-shrink: 0;
`;

export const Compartment = styled.div`
  font-family: Ubuntu, sans-serif;
  color: #805b10;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  padding: 0px;
  margin: 0px;
  margin-left: -3rem;
`;

export const Paragrafo = styled.p`
  color: #edc531;
  text-align: justify;
  padding: 0px;
  margin-left: 2rem;
`;

export const Image = styled.img`
  width: 45%;
  height: 45%;
  padding-top: 0.5rem;
  padding-left: 1rem;
`;

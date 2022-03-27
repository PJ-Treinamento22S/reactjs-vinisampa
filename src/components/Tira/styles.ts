import styled from "styled-components";

export const Tira = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const Perfil = styled.button`
  border: none;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  margin-left: 40px;
  width: 80%;
  padding: 5px;
  background-color: white;
  &:hover {
    background-color: #eee;
  }
`;

export const Photo = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-left: 0px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
  font-family: Ubuntu, sans-serif;
  font-size: 16px;
  color: #805b10;
  margin: 3px 0px 0px 8px;
  text-align: left;
`;

export const Ret = styled.img`
  height: 32px;
  width: 32px;
  margin-top: 8px;
  margin-left: 20px;
`;

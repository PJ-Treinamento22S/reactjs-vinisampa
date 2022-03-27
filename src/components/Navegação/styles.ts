import styled from "styled-components";

export const Menu = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Li = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

export const Img = styled.img`
  height: 25px;
  width: 25px;
`

export const Title = styled.a`
  font-family: Nunito, sans-serif;
  font-size: 24px;
  color: #805b10;
  text-decoration: none;
  margin-top: 3px;
  margin-left: 12px;
  &:hover {
    background-color: #eee;
  }
`;

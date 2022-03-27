import React from "react";
import * as S from "./styles";

interface NewsProps {
  title: string;
  photo: string;
  text: string;
}

const Noticia: React.FC<NewsProps> = (props) => {
  return (
    <>
      <S.Content>
        <S.Compartment>
          <S.Title>{props.title}</S.Title>
          <S.Paragrafo>{props.text}</S.Paragrafo>
        </S.Compartment>
        <S.Image src={props.photo}></S.Image>
      </S.Content>
    </>
  );
};

export default Noticia;
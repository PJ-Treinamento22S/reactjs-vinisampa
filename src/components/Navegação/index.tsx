import React from "react";
import * as S from "./styles";
import Piar from "./../Piar/index"
import Home from "./../../assets/home.svg";
import Hashtag from "./../../assets/hashtag.svg";
import Sino from "./../../assets/sino.svg";
import Envelope from "./../../assets/envelope.svg";
import Box from "./../../assets/comente.svg";
import Perfil from "./../../assets/busto.svg";
import { Icon } from '@iconify/react';

const Navegação: React.FC = () => {
  return (
    <>
      <S.Menu>
        <S.List>
          <S.Li>
            <S.Img src={Home} />
            <S.Title>
              <b>Home</b>
            </S.Title>
          </S.Li>
          <S.Li>
            <S.Img src={Hashtag} />
            <S.Title>Explore</S.Title>
          </S.Li>
          <S.Li>
            <S.Img src={Sino} />
            <S.Title>Notificações</S.Title>
          </S.Li>
          <S.Li>
            <S.Img src={Envelope} />
            <S.Title>Mensagens</S.Title>
          </S.Li>
          <S.Li>
            <S.Img src={Box} />
            <S.Title>Tópicos</S.Title>
          </S.Li>
          <S.Li>
            <S.Img src={Perfil} />
            <S.Title>Perfil</S.Title>
          </S.Li>
          <S.Li>
            <Icon icon="ic:outline-more-vert" color="#805b10" height="25" />
            <S.Title>Mais</S.Title>
          </S.Li>
          <Piar/>
        </S.List>
      </S.Menu>
    </>
  );
};

export default Navegação;
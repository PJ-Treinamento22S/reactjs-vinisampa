import React from "react";
import * as S from "./styles";
import User from "./../../assets/neymar.jpeg"
import Ret from "./../../assets/menu.svg"

const Tira: React.FC = () => {
  return (
    <>
      <S.Tira>
        <S.Perfil>
          <S.Photo src={User} />
          <S.Div>
            <S.Name><b>Hugo Feijão</b></S.Name>
            <S.Name>@Hugostojão</S.Name>
          </S.Div>
          <S.Ret src={Ret}/>
        </S.Perfil>
      </S.Tira>
    </>
  );
};

export default Tira;
import React from "react";
import * as S from "./styles";
import Comentarios from "./../../assets/comentarios.svg";
import Coração from "./../../assets/coracao.svg";
import RePiar from "./../../assets/rotate.svg";
import Share from "./../../assets/share.svg";

export interface PiuProps {
  id: string;
  user: User;
  likes: PiuLike[];
  text: string;
  created_at: Date;
  updated_at: Date;
}

interface User {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  about: string;
  photo: string;
  pius: PiuProps[];
  likes: PiuLike[];
  following: User[];
  followers: User[];
  favorites: PiuProps[];
}

interface PiuLike {
  id: string;
  user: User;
  piu: PiuProps;
}

const Piu: React.FC<PiuProps> = (props) => {
  return (
    <>
      <S.Piu key={props.id}>
        <S.Photo src={props.user.photo} />
        <S.Content>
          <S.Username>{props.user.username}</S.Username>
          <S.Text>{props.text}</S.Text>
          <S.Btns>
            <S.Actions src={Comentarios} />
            <S.Likes>
              <S.Actions src={Coração} />
              <S.Number>{props.likes.length}</S.Number>
            </S.Likes>
            <S.Actions src={RePiar} />
            <S.Actions src={Share} />
          </S.Btns>
        </S.Content>
      </S.Piu>
    </>
  );
};

export default Piu;

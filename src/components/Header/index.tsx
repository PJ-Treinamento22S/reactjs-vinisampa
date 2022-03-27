import React from 'react';
import {Lateral} from './styles';
import Logo from './../LogoImg/index';
import Nav from './../Navegação/index';
import Tira from './../Tira/index'

const Header:React.FC = () => {
  return (
    <>
      <Lateral>
        <Logo/>
        <Nav/>
        <Tira/>
      </Lateral>
    </>
  );
};

export default Header;

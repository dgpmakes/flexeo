import React from 'react'
import { Nav, NavLink, Input, Searchbar, NavBtn, NavBtnLink, LogoL, LogoS, Tagbar, Tag } from './NavbarElements';
import Logo_long from '../../images/logo-long.svg';
import Logo_short from '../../images/logo-short.svg';
import { IoLogoGoogle, IoMdAddCircleOutline } from 'react-icons/io';
import { FaSearch} from 'react-icons/fa';
import { colors } from '../../theme';
import Cookies from 'universal-cookie';
import LoginButton from '../LoginButton';
import {AiOutlineHome} from 'react-icons/ai';
import {IoChatbubblesOutline} from 'react-icons/io5';
import {CgProfile} from 'react-icons/cg';

import {FiUsers} from 'react-icons/fi';
//import AiOutlineHome from 'react-icons/ai';
//client-id 677485879058-rf5hin9fb0ljio7usi0379lijrq6i4ih.apps.googleusercontent.com
//secret-client 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

const NavbarUser = () => {

  return (
    <>
      <Nav>
        <NavLink to="/">
          <LogoL src={Logo_long} alt='logo' />
          <LogoS src={Logo_short} alt='logo' />
        </NavLink>
        <Searchbar>
          <FaSearch size={20} style={{color: colors.i_searchbar, margin: "0px 0px 0px 15px", verticalAlign: 'middle' }} /><Input type="text" placeholder="Buscar zapatillas" />
        </Searchbar>
        <NavBtn>
          <div style={{margin:'0px 10px 0px 0px'}}>
            <AiOutlineHome/>
            <h6>Inicio</h6>
          </div>
          
          <div style={{margin:'0px 10px 0px 0px'}}>
            <FiUsers/>
            <h6>Gente</h6>
          </div>
          <div style={{margin:'0px 10px 0px 0px'}}>
            <IoChatbubblesOutline/>
            <h6>Chats</h6>
          </div>
          <div style={{margin:'0px 10px 0px 0px'}}>
            <CgProfile/>
            <h6>Perfil</h6>
          </div>
          
          <NavBtnLink to="/upload"><IoMdAddCircleOutline size={20} style={{ margin: "0px 3px 0px 0px", verticalAlign: 'middle' }} />Sube tus zapas</NavBtnLink>
        </NavBtn>
      </Nav>
      <Tagbar>
        <Tag>Nike</Tag>
        <Tag>Adidas</Tag>
        <Tag>FILA</Tag>
        <Tag>Reebok</Tag>
        <Tag>Puma</Tag>
      </Tagbar>
      

    </>
  );
};

export default NavbarUser;
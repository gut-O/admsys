// Sidebar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineAppstore } from 'react-icons/ai';
import Home from '../pages/Home';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #5a81f7;
  color: #fff;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza os itens verticalmente */
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  width: 100%;
`;

const MenuItem = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3d5af7;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
  }

  span {
    margin-left: 5px; /* Aumenta a margem entre o ícone e o texto */
  }
`;

const Icon = styled.span`
  margin-right: 5px; /* Ajusta a margem entre o ícone e a borda do item da lista */
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <MenuList>
        <MenuItem>
          <Link to="/home" element={Home}>
            <Icon>
              <AiOutlineHome size={20} />
            </Icon>
            <span>Home</span>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about">
            <Icon>
              <AiOutlineUser size={20} />
            </Icon>
            <span>About</span>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/products">
            <Icon>
              <AiOutlineAppstore size={20} />
            </Icon>
            <span>Products</span>
          </Link>
        </MenuItem>
        {/* Adicione mais itens de menu conforme necessário */}
      </MenuList>
    </SidebarContainer>
  );
};

export default Sidebar;

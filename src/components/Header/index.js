import React from 'react';
import { useSelector } from 'react-redux';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/image/logo.svg';
import ConnectAccountButton from '../ConnectAccountButton';

const HeaderWrapper = styled.div`
  border-bottom: 1px solid #414250;
  .navbar {
    background-color: ${props => props.theme.color.bgPrimary} !important;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 3px;
    height: 50px;
    padding: 0 1rem;

    .navbar-brand {
      color: ${props => props.theme.color.bgPrimary};
      font-weight: bold;

      a {
        font-size: 20px;
        color: white;

        &:hover {
          text-decoration: none;
        }
        img {
          margin-right: 10px;
        }
      }
    }

    .navbar-collapse {
      display: flex;
      justify-content: flex-end;
      height: 100%;

      .navbar-nav {
        display: flex;
        align-items: center;
        height: 100%;
        .menuItem {
          width: 100%;
          margin: 0 20px;
          color: ${props => props.theme.color.textSecondary};
          text-align: center;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
  
          &:hover {
            text-decoration: none;
          }

          &.active {
            font-weight: bold;
            border-bottom: 2px solid white;
          }
        }
  
        .connect-btn {
          width: 150px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${props => props.theme.color.bgSecondary};
          border-radius: 5px;
          border: 1px solid transparent;
          color: ${props => props.theme.color.textSecondary};
          cursor: pointer;
          font-size: 14px;
          transition: 0.3s;
          padding: 0 10px;
          &:hover {
            border: 1px solid ${props => props.theme.color.white};
          }
        }
      }
    }
  }
`;

function Header() {
  const address = useSelector(state => state.authUser.address);

  return (
    <HeaderWrapper>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#">
            <NavLink to='/'>
              <img src={logo} alt='Agaave App Logo' />
              Agaave
            </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <NavLink
              to='/my-dash'
              className="menuItem"
            >
              MY DASHBOARD
            </NavLink>
            <NavLink 
              to='/nfts'
              className="menuItem"
             >NFT DROPS
            </NavLink>
            <NavLink
              to='/stake'
              className="menuItem"
            >
              STAKE
            </NavLink>
            <div className="connect-btn">{ address ? `${address.substring(0, 4)}...${address.substring(address.length - 4, address.length)}` : <ConnectAccountButton /> }</div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </HeaderWrapper>
  );
}

export default Header;
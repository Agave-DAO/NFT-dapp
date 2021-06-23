import React from 'react';
import { useSelector } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import Header from '../components/Header';
import Button from '../components/Button';
import styled from 'styled-components';
import background from '../assets/image/layout-background.svg'

const LayoutWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background: ${(props) => props.theme.color.layoutColor};
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  position: relative;
  overflow: hidden;
  height: 100vh;

  .screen {
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    overflow: auto;
    position: relative;
    z-index: 2;

    .screen-top-content {
      background-color: ${props => props.theme.color.agGreen[200]};
      padding: 7px 20px 10px;
      position: relative;
      box-sizing: border-box;

      &:after {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        height: 90px;
        width: 100%;
        background-color: ${props => props.theme.color.agGreen[200]};
        transition: all 0.1s ease-in-out 0s;
        z-index: -1;
      }

      .ag-balance {
        display: flex;
        justify-content: flex-end;
        z-index: 3;

        .ag-balance-button {
          .ag-balance-button-value {

          }
        }
      }
    }
  }
`;

const BackgroundImage = styled.img`
  height: 60%;
  width: 100%;
  position: absolute;
  bottom: 0;
  transform: translateY(50px);
`;

function Layout({ children }) {
  // const address = useSelector(state => state.authUser.address);

  return (
    <LayoutWrapper>
      <>
        <Header />
        <main className="screen">
          <div className="screen-top-content">
            <div className="ag-balance">
              <Button size="sm" variant="primary" text="0 AG" />
            </div>
          </div>
          <BackgroundImage src={background} />
          {children}
        </main>
      </>
      <NotificationContainer />
      
    </LayoutWrapper>
  );
}

export default Layout;
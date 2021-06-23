import React from 'react';
import { useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import { web3 } from '../../utils/web3';
import config from '../../config';
import styled from 'styled-components';
import connect from '../../assets/image/connect.svg';
import { setAddress, setNetworkId, setConnectType } from "../../redux/actions";

const ConnectButton = styled.div`
  display: flex; 
  white-space: nowrap;
  > * { 
    padding: 0 5px;
  }
`;

const ConnectAccountButton = () => {
    const dispatch = useDispatch();
    const onConnectAccount = async () => {
        if (typeof window.ethereum === 'undefined') {
            NotificationManager.warning('Please install MetaMask!');
            return;
        }
        try {
            const netId = `${await web3.eth.net.getId()}`;
            if (netId !== config.networkId) {
                if (config.networkId === '1')
                    NotificationManager.warning('Please select main net to proceed!');
                else if (config.networkId === '4') {
                    NotificationManager.warning('Please select rinkeby net to proceed!');
                }
                return;
            }
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            if (accounts[0]) {
                dispatch(setNetworkId(netId));
                dispatch(setAddress(accounts[0]));
                dispatch(setConnectType('metamask'));
            }
        } catch (error) {
            NotificationManager.warning('Something went wrong while connect wallet');
        }
    }
    return <ConnectButton onClick={onConnectAccount}> {<img src={connect} alt='connect'/>} Connect Account </ConnectButton>
}

export default ConnectAccountButton
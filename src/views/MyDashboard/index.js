import React from 'react';
import Page from '../../components/Page';
import Styled from './mydashboard.style';
import MyNFTDashTable from './my-nft-dash-table';

const MyDash = () => {
    
    return (
        <Page>
            <Styled.PageHeadline>
                <h1>My NFT Rewards</h1>
                <span>0x000000x00x00x0x01x00x</span>
            </Styled.PageHeadline>
            <MyNFTDashTable />
        </Page>
    )
}

export default MyDash;


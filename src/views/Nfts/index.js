import React from 'react';
import Page from '../../components/Page';
import Styled from './ntfs.style';
import DisplayReward from '../../components/DisplayNftReward';
const Nfts = () => {
    return(
        <Page>
            <Styled.PageHeadline>
               <h1>Agave NFT Drops</h1> 
            </Styled.PageHeadline>
            <DisplayReward />
        </Page>
    )
}


export default Nfts
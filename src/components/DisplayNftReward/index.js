import React from 'react';
import Styled from './display-nft-reward.style';
import { useSelector } from 'react-redux'; 
import Button from '../Button';

const DisplayReward = () => {
    const address = useSelector(state => state.authUser.address);
    return(
        <Styled.DisplayRewardsCard>
            <span>Display My NFT Rewards</span>
            <p>Please insert your wallet address or connect your account</p>
            {address ? address : <input type='text'/>}
            <Button variant='primary'>Display</Button>
        </Styled.DisplayRewardsCard>
    )
}

export default DisplayReward
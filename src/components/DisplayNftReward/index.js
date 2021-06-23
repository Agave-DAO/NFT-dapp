import React from 'react';
import Styled from './display-nft-reward.style';
import { useSelector } from 'react-redux'; 
import Button from '../Button';
import { useHistory } from 'react-router';

const DisplayReward = () => {
    const address = useSelector(state => state.authUser.address);
    const history = useHistory();
    return(
        <Styled.DisplayRewardsCard>
            <span><strong>Display My NFT Rewards</strong></span>
            <p>{address ? address : 'Please connect your account'}</p>
            {address ? <Button variant='gradient' borderRadius='5px' onClick={() => history.push('/my-dash')}>Display</Button> : <></>}
        </Styled.DisplayRewardsCard>
    )
}

export default DisplayReward
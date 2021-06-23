import React from 'react';
import Styled from './mynftcard.style'; 
import logo from '../../assets/image/logo.svg';

const MyNFTCard = (props) => {
    const {rarity, name, description } = props;
    
    return (
        <Styled.NftCard>
            <Styled.CardHeader>
                <span>Rarity:</span>
                <span className='with-gradient'>{rarity}</span>
            </Styled.CardHeader>
            <Styled.CardBody>
                <img src={logo} alt='placeholder'/>
            </Styled.CardBody>
            <Styled.CardFooter>
                <span>Name: {name}</span>
                <span>Description: {description}</span>
            </Styled.CardFooter>
        </Styled.NftCard>
    )
}

export default MyNFTCard;
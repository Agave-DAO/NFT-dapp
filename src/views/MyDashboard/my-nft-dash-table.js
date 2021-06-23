import React from 'react';
import Styled from './mydashboard.style';
import mockData from '../../mockData/mynfts.js';
import MyNFTCard from '../../components/MyNFTCard';

const MyNFTDashTable = () => {
    console.log(mockData)
    return (
        <Styled.NftDashTable>
            <span>Genisis set</span>
            <div>
                {mockData.map((item, index) => {
                    return <MyNFTCard key={index} rarity={item.rarity} name={item.name} description={item.description} />
                })}
            </div>
        </Styled.NftDashTable>
    )
}

export default MyNFTDashTable
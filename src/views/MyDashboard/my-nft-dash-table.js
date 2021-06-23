import React from 'react';
import Styled from './mydashboard.style';
import mockData from '../../mockData/mynfts.js';
import MyNFTCard from '../../components/MyNFTCard';
import { useSelector } from 'react-redux';
const MyNFTDashTable = () => {
    const address = useSelector(state => state.authUser.address);
    return (
        <Styled.NftDashTable>
            <span>Genisis set</span>
            <div>
                {address ? mockData.map((item, index) => {
                    return <MyNFTCard key={index} rarity={item.rarity} name={item.name} description={item.description} />
                }) : <>Please Connect your account</>}
            </div>
        </Styled.NftDashTable>
    )
}

export default MyNFTDashTable
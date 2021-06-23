import styled from 'styled-components';

const NftCard = styled.div`
    height: 250px;
    width: 180px;
    padding: 15px;
    margin: 30px;
    margin-left: 0;
    border-radius: 12px;
    background-color: ${(props) => {
        console.log(props);
        return props.theme.color.CardColor;
    }};
    position: relative;
    color: white;
    &::before {
        content: '';
        height: 2px;
        width: 100%;
        position: absolute;
        left: 0;
        top: 40px;
        background-image: linear-gradient(90.53deg, #9BEFD7 0%, #8BF7AB 47.4%, #FFD465 100%);
    }
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between; 
    > span {
        &.with-gradient {
            background: -webkit-linear-gradient(90.53deg, #9BEFD7 0%, #8BF7AB 47.4%, #FFD465 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }   
    
`;

const CardBody = styled.div`
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
`;

const CardFooter = styled.div`
    display: flex;
    flex-direction: column;
    span {
        font-size: 10px;
        line-height: 16px; 
    }
`;

const Styled = {
    NftCard,
    CardHeader,
    CardBody,
    CardFooter,
}

export default Styled;
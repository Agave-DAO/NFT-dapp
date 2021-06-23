import styled from 'styled-components';

const PageHeadline = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border: 1px solid ${(props) => props.theme.color.agGreen[100]};
    color: white;
    padding: 32px 42px;
    line-height: 34px;
    font-weight: 700;
    border-radius: 12px;
    h1 {
        font-size: 24px;
    }
    background: ${(props) => props.theme.color.agGreen[100]};
`;

const NftDashTable = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    padding: 20px;
    margin: auto;
    border: 1px solid ${(props) => props.theme.color.agGreen[100]};
    border-radius: 12px;
    background: ${(props) => props.theme.color.agGreen[100]};
    color: ${(props) => props.theme.color.white};
    font-weight: 700;
    font-size: 17px;
    line-height: 23.8px;
    overflow-y: scroll;
    > div {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    &::-webkit-scrollbar {
       width: 3px;
    }
      
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
      
    &::-webkit-scrollbar-thumb {
      background: #007C6E;
    }
      
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
`;

const Styled = {
    PageHeadline,
    NftDashTable,
}

export default Styled;
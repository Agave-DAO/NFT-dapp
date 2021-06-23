import styled from 'styled-components';

const PageHeadline = styled.div`
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
const Styled = {
    PageHeadline,  
}   

export default Styled;
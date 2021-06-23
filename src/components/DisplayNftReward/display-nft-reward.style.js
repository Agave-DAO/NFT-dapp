import styled from 'styled-components';

const DisplayRewardsCard =  styled.div`
    display: flex;
    align-self: center;
    justify-self: center;
    flex-direction: column;
    text-align: center;
    border: 1px solid ${(props) => props.theme.color.agGreen[100]};
    border-radius: 12px;
    padding: 50px 75px;
    margin-top: 150px;
    color: white;
    background-color: ${(props) => props.theme.color.agGreen[100]};
    > * {
      margin: 8px auto;
    }
`;

const Styled = {
    DisplayRewardsCard,
};

export default Styled;
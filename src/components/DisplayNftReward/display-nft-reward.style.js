import styled from 'styled-components';

const DisplayRewardsCard =  styled.div`
    display: flex;
    align-self: center;
    justify-self: center;
    flex-direction: column;
    text-align: center;
    border: 1px solid black;
    border-radius: 12px;
    padding: 50px 75px;
    margin: 50px;
    color: white;
    background-color: black;
    > * {
      margin: 8px auto;
    }
`;

const Styled = {
    DisplayRewardsCard,
};

export default Styled;
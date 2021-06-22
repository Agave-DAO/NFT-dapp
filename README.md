# Agave Frontend
This is an interface for Agaave protocol.
## Install
```
npm install

# local development
npm run start

# production build
npm run build
```
# Howto test the Frontend on Rinkeby Test network.

1. You will need metamask and I recommend you create a test account so you don't accidently send real money or tokens to test network.  You can goto the icon on top right and then select create
account.  Name this account Account Test or something similar so you know its a test account.

![Account metamask](https://github.com/buzzlightyearbee/agave-frontend/blob/readme/assets/images/account.png)

2. You need to get some ETH into your test account.

Create or post a tweet on twitter with your test account address in the tweet

![Create post](https://github.com/buzzlightyearbee/agave-frontend/blob/readme/assets/images/step2.png)

3. Once you have done this you can now goto https://faucet.rinkeby.io/ and get some ETH select give me Ether and the option 18.75 ETH / 3 days

![Faucet Rinkeby](https://github.com/buzzlightyearbee/agave-frontend/blob/readme/assets/images/step3.png)
4. Now you have some ETH you can wrap the ETH for WETH from this contract address:

https://rinkeby.etherscan.io/address/0xdf032bc4b9dc2782bb09352007d4c57b75160b15#writeContract

Connect your wallet -> Then under write contract -> deposit set an amount of WETH you want to receive.

![Wrap eth](https://github.com/buzzlightyearbee/agave-frontend/blob/readme/assets/images/step4.png)

You should now have some test WETH and be able to test the front end and deposit and request loans.






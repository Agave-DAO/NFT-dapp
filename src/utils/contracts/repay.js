import { web3 } from '../web3';
import { AgaveContractABI } from './abi/agaveLendingABI';
import { internalAddresses } from './contractAddresses/internalAddresses';
import { marketData } from '../constants';

const repay = (address, amount, assetName) => {
    let targetAsset = marketData.find((asset) => {
        return asset.name === assetName
    });
    const contractInstance = new web3.eth.Contract(AgaveContractABI, internalAddresses.Lending);
    return new Promise((resolve, reject) => {
        let repayAmount = web3.utils.toWei(amount, 'ether')
        contractInstance.methods.repay(targetAsset.contractAddress, repayAmount, 2, address).send({
            from: address
        }, (err, res) => {
            if (err) reject(err);
            resolve(res);
        })
    })
    
}

export default repay;
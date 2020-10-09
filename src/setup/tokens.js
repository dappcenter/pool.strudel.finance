
import BigNumber from 'bignumber.js';

import { eth } from '@pie-dao/eth';
import { ethers } from 'ethers';
import { mint } from '@pie-dao/mint';
import ReservePoolController from '../abi/ReservePoolController';
import BPool from '../abi/BPool';

export const controllerAddress = '0xd439932fbc03c0f646324ef09a4a0c28c0d4008b'.toLowerCase();
export const WETHAddress = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'.toLowerCase();
export const VBTCAddress = '0xe1406825186d63980fd6e2ec61888f7b91c4bae4'.toLowerCase();
export const poolAddress = '0xe044bC87a030D370D64a6cA4531a08a4e67444E0'.toLowerCase();

export const mintable = {
  address: controllerAddress,
  amountPerUnit: BigNumber(1),
  color: '#ffcd1c',
  symbol: 'vBTC++',
  weight: BigNumber(100),
};
const MAX = ethers.constants.MaxUint256;

const buildTokens = (mappedAmounts) => ({
  WETH: {
    address: WETHAddress,
    decimals: 18,
    amountPerUnit: BigNumber(mappedAmounts[WETHAddress]).dividedBy(10 ** 18),
    color: '#1caa98',
    symbol: 'ETH',
    weight: BigNumber(5),
  },
  VBTC: {
    address: VBTCAddress,
    decimals: 18,
    amountPerUnit: BigNumber(mappedAmounts[VBTCAddress]).dividedBy(10 ** 18),
    color: '#305cee',
    symbol: 'vBTC',
    weight: BigNumber(5),
  },
});


const updateTokens = async ({ database }) => {
  const { signer } = eth;
  console.log(database);
  try {
    const poolContract = new ethers.Contract(
      poolAddress,
      BPool,
      signer,
    );

    const denormWeight = await poolContract.methods.getDenormalizedWeight(VBTCAddress).call();
    const weightVBTC = new BigNumber(denormWeight);

    const wethWeight = new BigNumber(5).times(new BigNumber(10e17));

    const totalWeight = weightVBTC.plus(wethWeight);

    const WETHPercentage = wethWeight.dividedBy(totalWeight);
    const VBTCPercentage = weightVBTC.dividedBy(totalWeight);

    const WETHRequired = BigNumber(1).multipliedBy(WETHPercentage);
    const VBTCRequired = BigNumber(1).multipliedBy(VBTCPercentage);

    const updates = {
      WETH: {
        amountPerUnit: WETHRequired,
        weight: WETHPercentage.multipliedBy(100).dp(2),
      },
      VBTC: {
        amountPerUnit: VBTCRequired,
        weight: VBTCPercentage.multipliedBy(100).dp(2),
      },
    };

    mint.updateTokens(updates);
  } catch (e) {
    console.error('TOKEN UPDATE ERROR', e);
  }
};

export const initialize = async ({ database }) => {
  const {
    approve, notify, signer, transactionOverrides,
  } = eth;

  // Load up pools target weights
  const controllerContract = new ethers.Contract(
    controllerAddress,
    ReservePoolController,
    signer,
  );
  // const poolAmount = ethers.BigNumber.from('1000000000000000000');

  const [WETHBalance, VBTCBalance] = await Promise.all([
    database.balance({ address: poolAddress, token: WETHAddress }),
    database.balance({ address: poolAddress, token: VBTCAddress }),
  ]);

  const poolAmounts = [
    [
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      '0xe1406825186d63980fd6e2ec61888f7b91c4bae4',
    ],
    [WETHBalance, VBTCBalance],
  ]; // await controllerContract.calcTokensForAmount(poolAmount);

  console.log('poolAmounts:', poolAmounts[1][0].toString());
  const mappedAmounts = {};
  poolAmounts[0].forEach((token, index) => {
    mappedAmounts[token.toLowerCase()] = poolAmounts[1][index].toString();
  });
  console.log('mappedAmounts: ', mappedAmounts);
  const tokens = buildTokens(mappedAmounts);

  console.log('TOKEN CONFIG', tokens);

  const submit = async () => {
    const amount = BigNumber(mint.slider).multipliedBy(10 ** 18);
    const joinAmount = ethers.BigNumber.from(amount.toFixed());
    const overrides = transactionOverrides({ gasLimit: 1000000 });

    await approve({ spender: controllerAddress, token: WETHAddress });
    await approve({ spender: controllerAddress, token: VBTCAddress });

    notify(
      await controllerContract.joinPool(joinAmount, [MAX, MAX], overrides),
    );
  };

  if (!mint.initialized) {
    try {
      mint.init({
        approve,
        database,
        mintable,
        submit,
        tokens,
      });

      setInterval(() => {
        updateTokens({ database });
      }, 10000);
      setTimeout(() => {
        updateTokens({ database });
      }, 1000);
    } catch (e) {
      console.error('MINT INITIALIZING ERROR', e);
    }
  } else {
    // TODO: make this unnecessary
    window.location.reload();
  }
};

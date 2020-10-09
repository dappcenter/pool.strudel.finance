import React from 'react';

import './styles.css';

import { BlockchainDatabase } from '@pie-dao/blockchain';
import { eth } from '@pie-dao/eth';
import { render } from 'react-dom';

import App from './App';

import { initialize } from './setup/tokens';

const blocknativeDappId = '523b279d-0fe0-42e8-8977-e688c3686e57';

const database = new BlockchainDatabase({ blocknativeDappId });

eth.on('accountChanged', async (message, { account }) => {
  console.log('accountChanged event received', account);

  initialize({ database });

  database.track({ address: account });
});

window.document.addEventListener('DOMContentLoaded', () => {
});

const config = {
  mint: {
    step: 0.000001,
  },
};

const images = {
  logo: './assets/img/logo1.png',
  hero: './assets/img/hero.png',
};

const links = {
  discord: 'https://discord.gg/CcEE5mC',
  docs: '',
  forum: '',
  github: 'https://github.com/strudel-finance/',
  homepage: 'https://strudel.finance/',
  liquidity: '',
  medium: 'https://medium.com/@strudelfinance/strudel-manifesto-580759f9634b',
  twitter: 'https://twitter.com/strudelfinance',
  whitepaper: '',
};

const text = {
  hero: {
    description:
      'Every Hall-of-Fame investor is obsessed with the question of how best to diversify to '
      + 'maximize returns and minimize risks.',
    linkText: 'Start now',
    title: 'Ready to diversify?',
  },
  mint: {
    descriptor: 'Liquidity',
    chartHeader: 'Allocation',
    liquidityText:
      '<h1>WARNING! - BETA PRODUCT!</h1>'
      + '<p>vBTC++ is newly launched.</p>'
      + '<p>DeFi products, and this product in particular are risky.</p>'
      + '<p>Use at your own risk.</p>',
    verb: 'Add',
  },
  products: {
    title: 'Choose the right diversification strategy for you',

    'AWP++': {
      description:
        'Diversify like Ray Dalio with a portfolio that keeps you safe in all weather. Bonus: '
        + 'with crypto assets.',
      linkText: 'Coming soon',
    },
    'BTC++': {
      description:
        'Diversify your Bitcoin positions among different representations of BTC '
        + '(imBTC, pBTC, sBTC & wBTC)',
      linkText: 'Try it now',
    },
    'USD++': {
      description:
        'Diversify your USD position among different representations of USD, such as DAI, USDC, '
        + 'TUSD',
      linkText: 'Try it now',
    },
  },
  tldr: {
    description:
      'USD++ is a weighed allocation between the different representations of USD on '
      + 'Ethereum. USD, for DeFi, diversified.',
  },
};

const props = {
  config,
  database,
  images,
  links,
  text,
};

window.database = database;
window.eth = eth;

render(<App {...props} />, document.getElementById('App'));

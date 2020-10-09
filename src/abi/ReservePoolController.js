const ReservePoolController = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenOut',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenAmountOut',
        type: 'uint256',
      },
    ],
    name: 'LogExit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenIn',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenAmountIn',
        type: 'uint256',
      },
    ],
    name: 'LogJoin',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bool',
        name: 'direction',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Trade',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'BONE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'BPOW_PRECISION',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'EXIT_FEE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_ASSET_LIMIT',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_BALANCE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_BPOW_BASE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_FEE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_IN_RATIO',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_OUT_RATIO',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_POOL_SUPPLY',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_TOTAL_WEIGHT',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_UINT',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_WEIGHT',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MIN_ASSET_LIMIT',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MIN_BALANCE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MIN_BPOW_BASE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MIN_FEE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MIN_POOL_SUPPLY',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MIN_WEIGHT',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bPool',
    outputs: [
      {
        internalType: 'contract IBPool',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenBalanceIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenWeightIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenBalanceOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenWeightOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenAmountOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'swapFee',
        type: 'uint256',
      },
    ],
    name: 'calcInGivenOut',
    outputs: [
      {
        internalType: 'uint256',
        name: 'tokenAmountIn',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenBalanceIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenWeightIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenBalanceOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenWeightOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenAmountIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'swapFee',
        type: 'uint256',
      },
    ],
    name: 'calcOutGivenIn',
    outputs: [
      {
        internalType: 'uint256',
        name: 'tokenAmountOut',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenBalanceOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenWeightOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'poolSupply',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalWeight',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenAmountOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'swapFee',
        type: 'uint256',
      },
    ],
    name: 'calcPoolInGivenSingleOut',
    outputs: [
      {
        internalType: 'uint256',
        name: 'poolAmountIn',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenBalanceIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenWeightIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'poolSupply',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalWeight',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenAmountIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'swapFee',
        type: 'uint256',
      },
    ],
    name: 'calcPoolOutGivenSingleIn',
    outputs: [
      {
        internalType: 'uint256',
        name: 'poolAmountOut',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenBalanceIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenWeightIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'poolSupply',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalWeight',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'poolAmountOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'swapFee',
        type: 'uint256',
      },
    ],
    name: 'calcSingleInGivenPoolOut',
    outputs: [
      {
        internalType: 'uint256',
        name: 'tokenAmountIn',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenBalanceOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenWeightOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'poolSupply',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalWeight',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'poolAmountIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'swapFee',
        type: 'uint256',
      },
    ],
    name: 'calcSingleOutGivenPoolIn',
    outputs: [
      {
        internalType: 'uint256',
        name: 'tokenAmountOut',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenBalanceIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenWeightIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenBalanceOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenWeightOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'swapFee',
        type: 'uint256',
      },
    ],
    name: 'calcSpotPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: 'spotPrice',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'initialSwapFee',
        type: 'uint256',
      },
    ],
    name: 'deployPool',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes32',
        name: 'data',
        type: 'bytes32',
      },
    ],
    name: 'executeOnFlashMint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'poolAmountIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256[]',
        name: 'minAmountsOut',
        type: 'uint256[]',
      },
    ],
    name: 'exitPool',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenOut',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenAmountOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxPoolAmountIn',
        type: 'uint256',
      },
    ],
    name: 'exitswapExternAmountOut',
    outputs: [
      {
        internalType: 'uint256',
        name: 'poolAmountIn',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenOut',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'poolAmountIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minAmountOut',
        type: 'uint256',
      },
    ],
    name: 'exitswapPoolAmountIn',
    outputs: [
      {
        internalType: 'uint256',
        name: 'tokenAmountOut',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getParams',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_vBtcAddr',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_wEthAddr',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_bPoolFactory',
        type: 'address',
      },
      {
        internalType: 'contract IUniswapV2Router01',
        name: '_uniRouter',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_oracle',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isPublicSwap',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'poolAmountOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256[]',
        name: 'maxAmountsIn',
        type: 'uint256[]',
      },
    ],
    name: 'joinPool',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenIn',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenAmountIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minPoolAmountOut',
        type: 'uint256',
      },
    ],
    name: 'joinswapExternAmountIn',
    outputs: [
      {
        internalType: 'uint256',
        name: 'poolAmountOut',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenIn',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'poolAmountOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxAmountIn',
        type: 'uint256',
      },
    ],
    name: 'joinswapPoolAmountOut',
    outputs: [
      {
        internalType: 'uint256',
        name: 'tokenAmountIn',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'resyncWeights',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_uniRouter',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_oracle',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_maxVbtcWeight',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_swapFee',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_isPublicSwap',
        type: 'bool',
      },
    ],
    name: 'setParams',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
export default ReservePoolController;

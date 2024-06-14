type metaMaskMethod =
  | 'eth_requestAccounts'
  | 'eth_chainId'
  | 'wallet_watchAsset'
  | 'eth_getBalance'
  | 'eth_sendTransaction'
  | 'eth_call'
  | 'wallet_switchEthereumChain';

export const metaMaskContract = <T>(method: metaMaskMethod, params?: T) => {
  const data = window.ethereum.request({
    method,
    params,
  });
  return data;
};

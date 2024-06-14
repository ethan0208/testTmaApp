import { useAppSelector } from 'app/hooks';

import { WALLET_TYPE } from 'constant/wallet';
import { createPublicClient, createWalletClient, custom, http } from 'viem';
import { klaytn, klaytnBaobab } from 'viem/chains';

import { shallowEqual } from 'react-redux';

export const useViem = () => {
  const { account, walletType, chainId } = useAppSelector(
    state => ({
      account: state.walletInfo.account,
      walletType: state.walletInfo.walletType,
      chainId: state.walletInfo.chainId,
    }),
    shallowEqual
  );

  const client = createPublicClient({
    chain: chainId === 8217 ? klaytn : klaytnBaobab,
    transport: chainId === 8217 ? http('') : http(''),
  });

  const walletClient = createWalletClient({
    account,
    chain: chainId === 8217 ? klaytn : klaytnBaobab,
    transport: walletType === WALLET_TYPE.Kaikas ? custom(window.klaytn) : custom(window.ethereum),
  });

  // const factoryContract = getContract({
  //   address: '0x',
  //   abi: {},
  //   client: { public: client, wallet: walletClient },
  // });

  // const pairContract = getContract({
  //   address: '0x',
  //   abi: {},
  //   client: { public: client, wallet: walletClient },
  // });

  // const routerContract = getContract({
  //   address: '0x',
  //   abi: {},
  //   client: { public: client, wallet: walletClient },
  // });

  // const awmContract = getContract({
  //   address: '0x',
  //   abi: {},
  //   client: { public: client, wallet: walletClient },
  // });

  // const wKlayContract = getContract({
  //   address: '0x',
  //   abi: {},
  //   client: { public: client, wallet: walletClient },
  // });

  return {
    client,
    walletClient,
  };
};

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import storageService from 'common/services/storage.service';
import { STORAGE_KEYS } from 'constant/keys';
import { Address } from 'viem';

export interface WalletSliceInfoType {
  payload: boolean;
  account: Address;
  walletType: string;
  chainId: number;
}

const initialState: WalletSliceInfoType = {
  payload: storageService.loadData(STORAGE_KEYS.walletInfo)?.payload ?? false,
  account: storageService.loadData(STORAGE_KEYS.walletInfo)?.account ?? '',
  walletType: storageService.loadData(STORAGE_KEYS.walletInfo)?.walletType ?? '',
  chainId: storageService.loadData(STORAGE_KEYS.walletInfo)?.chainId ?? 8217,
};

const walletInfoSlice = createSlice({
  name: 'walletInfo',
  initialState,
  reducers: {
    walletConnect: (state, action: PayloadAction<WalletSliceInfoType>) => {
      const newWalletInfo = Object.assign(state, action.payload);
      storageService.saveData(STORAGE_KEYS.walletInfo, newWalletInfo);
    },
    walletDisconnect: state => {
      Object.assign(state, {
        payload: false,
        account: '',
        walletType: '',
        chainId: 8217,
      });
      storageService.removeData(STORAGE_KEYS.walletInfo);
    },
    changeChainId: (state, action: PayloadAction<number>) => {
      const newChainId = Object.assign(state, {
        ...state,
        chainId: action.payload,
      });
      storageService.saveData(STORAGE_KEYS.walletInfo, newChainId);
    },
    changeAccount: (state, action: PayloadAction<Address>) => {
      const newAccount = Object.assign(state, {
        ...state,
        account: action.payload,
      });
      storageService.saveData(STORAGE_KEYS.walletInfo, newAccount);
    },
  },
});

export const { walletConnect, walletDisconnect, changeChainId, changeAccount } = walletInfoSlice.actions;

export default walletInfoSlice.reducer;

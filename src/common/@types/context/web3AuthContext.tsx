import { IWalletProvider } from "@/common/core/clients/web3auth/walletProvider";
import type { OpenloginUserInfo } from "@toruslabs/openlogin";
import { Web3Auth } from "@web3auth/modal";

export interface IWeb3AuthContext {
    web3Auth: Web3Auth | null;
    wagmiClient: any | null;
    provider: IWalletProvider | null;
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
    chain: string;
    user: Partial<OpenloginUserInfo>;
    publicKey: string;
    isWeb3AuthInit: boolean;
    login: () => Promise<void>;
    logout: () => Promise<void>;
    getUserInfo: () => Promise<any>;
    //signMessage: () => Promise<any>;
    getAccounts: () => Promise<any>;
    getBalance: () => Promise<any>;
    getPublicKey: () => Promise<any>;
    // signTransaction: () => Promise<void>;
    // signAndSendTransaction: () => Promise<void>;
}
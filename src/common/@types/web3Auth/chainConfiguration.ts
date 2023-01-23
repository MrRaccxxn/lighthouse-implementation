import { CHAIN_NAMESPACES } from "@web3auth/base";

export const CHAIN_CONFIG = {
    hyperspace_testnet: {
        displayName: "Hyperspace testnet",
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: "0xC45",
        rpcTarget: `https://api.hyperspace.node.glif.io/rpc/v0`,
        blockExplorer: "https://hyperspace.filfox.info/",
        ticker: "tFIL",
        tickerName: "tFIL",
    },
} as const;

export type CHAIN_CONFIG_TYPE = keyof typeof CHAIN_CONFIG;
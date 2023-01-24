import _ from "lodash";
import Image from "next/image";
import { useAccount, useDisconnect } from 'wagmi'
import { ConnectWallet } from "../components/ConnectWallet";
import ClientRehydration from "../utils/ClientRehydration";

export const NavBar = () => {
    const { address, isConnected } = useAccount()
    const { disconnect } = useDisconnect()

    return <ClientRehydration>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Logo</a>
            </div>

            {
                !isConnected ?
                    (
                        <ConnectWallet />
                    )
                    :
                    (
                        <div onClick={() => disconnect()} className='cursor-pointer'>
                            <div className="flex flex-row gap-3 items-center">
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <Image src="/assets/illustrations/raccoon.png" alt="avatar" width={40} height={40} />
                                    </div>
                                </div>
                                <div className="font-medium">
                                    <div className="text-white">
                                        {address?.slice(0, 5) + '...' + address?.slice(address.length - 5, address.length)}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        A Dump Raccoon
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    </ClientRehydration>
}
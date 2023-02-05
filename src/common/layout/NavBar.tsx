import _ from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useAccount, useDisconnect } from 'wagmi'
import { ConnectWallet } from "../components/ConnectWallet";
import ClientRehydration from "../utils/ClientRehydration";

export const NavBar = () => {
    return <ClientRehydration>
        <div className="navbar bg-transparent">
            <div className="flex-1">
                <Link href={'/'} className="btn btn-ghost normal-case text-xl">
                    <Image
                        alt="logo"
                        width={36}
                        height={36}
                        src={'/assets/logo.png'}
                    />
                </Link>
            </div>
            <ConnectWallet />
        </div>
    </ClientRehydration>
}
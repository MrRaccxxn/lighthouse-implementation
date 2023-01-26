import _ from "lodash";
import { SBTContractAbi } from "@/common/contracts/abi/SBT";
import { useAccount, useContractRead } from "wagmi";

export const Home = () => {
    const { isConnected } = useAccount();
    const { address } = useAccount();

    const { data } = useContractRead({
        address: `0x${process.env.NEXT_PUBLIC_SBT_CONTRACT_ADDRESS}`,
        abi: SBTContractAbi,
        functionName: 'getSoul',
        args: [address],
    });

    debugger;

    let output = Object.values(data || {});
    if (output[0] === '') output = [];

    return <div className="hero min-h-screen" style={{ backgroundImage: `url("/assets/illustrations/alexandria.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md flex flex-col gap-1">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                {
                    !isConnected && <p className="mb-5">Connect your wallet to validate your SBTs</p>
                }
                {isConnected ?
                    !_.isEmpty(output) ?
                        <div className="flex flex-col gap-3 ">
                            {
                                output.slice(0, output.length / 2).map((item, key) => {
                                    return <p key={key}>{`${item}`}</p>
                                })
                            }
                        </div>
                        : <>Sorry you dont own a SBT ☹️</>
                    : <></>
                }
            </div>
        </div>
    </div>
}
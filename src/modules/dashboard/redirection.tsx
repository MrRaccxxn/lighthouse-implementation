import { Loader } from "@/common/components/Loader";
import { useContext } from "react";
import { Dashboard } from ".";
import { DashboardContext } from "./context/DashboardContext";
import { OnBoard } from "./sections/OnBoard";
import { DashboardContextInterface } from "./types/context/dashboardContext";
import networkMapping from 'constants/networkMapping.json';
import SBTAbi from 'constants/SBTAbi.json';
import { useAccount, useContractRead } from "wagmi";
import { hexToDecimal } from "@/common/utils/parsing";
import { SBTContractResponse } from "./types/models/SBT";

export const RedirectionDashboard = () => {
    const { requireOnboarding, setRequireOnboarding } = useContext(DashboardContext) as DashboardContextInterface;
    const { address } = useAccount();

    const { data, isLoading } = useContractRead({
        address: `0x${networkMapping[3141].SBT[0].slice(2, networkMapping[3141].SBT[0].length)}`,
        abi: SBTAbi,
        functionName: 'balanceOf',
        args: [address],
    });

    if (isLoading) return <div className="w-screen h-scree">
        <Loader fillScreen={true} />
    </div>

    if (hexToDecimal(data as BigInt) === SBTContractResponse.hasSbt) setRequireOnboarding(false)

    return <>
        {!requireOnboarding && <Dashboard />}
        {requireOnboarding && <OnBoard />}
    </>
}
import { Loader } from "@/common/components/Loader";
import { useContext } from "react";
import { Dashboard } from ".";
import { DashboardContext } from "./context/DashboardContext";
import { OnBoard } from "./sections/OnBoard";
import { DashboardContextInterface } from "./types/context/dashboardContext";
import networkMapping from 'constants/networkMapping.json';
import EditorAbi from 'constants/EditorAbi.json';
import { useAccount, useContractRead } from "wagmi";
import { hexToDecimal } from "@/common/utils/parsing";
import { SBTContractResponse } from "./types/models/SBT";

export const RedirectionDashboard = () => {
    const { requireOnboarding, setRequireOnboarding } = useContext(DashboardContext) as DashboardContextInterface;
    const { address: userAddress } = useAccount();

    const { data, isLoading } = useContractRead({
        address: `0x${networkMapping[3141].Editor.slice(2, networkMapping[3141].Editor.length)}`,
        abi: EditorAbi,
        functionName: 'getSbtCount',
        args: [userAddress],
    });

    if (isLoading) return <div className="w-screen h-scree">
        <Loader fillScreen={true} />
    </div>

    if (data && hexToDecimal(data as BigInt) === SBTContractResponse.hasSbt) setRequireOnboarding(false)

    return <>
        {/* {!requireOnboarding && <Dashboard />} */}
        {/* {requireOnboarding && <OnBoard />} */}
        <Dashboard />
    </>
}
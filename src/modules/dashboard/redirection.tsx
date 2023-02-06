import { Loader } from "@/common/components/Loader";
import { useContext, useEffect, useState } from "react";
import { Dashboard } from ".";
import { DashboardContext } from "./context/DashboardContext";
import { OnBoard } from "./sections/OnBoard";
import { DashboardContextInterface } from "./types/context/dashboardContext";
import networkMapping from 'constants/networkMapping.json';
import EditorAbi from 'constants/EditorAbi.json';
import { useAccount, useContractRead } from "wagmi";
import { hexToDecimal } from "@/common/utils/parsing";
import { SBTContractResponse } from "./types/models/SBT";
import { getUser } from "@/common/services/models/user";

export const RedirectionDashboard = () => {
    const { requireOnboarding, setRequireOnboarding } = useContext(DashboardContext) as DashboardContextInterface;
    const { address: userAddress } = useAccount();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getUserFetch = async () => {
            const response = await getUser({ userAddress: userAddress || '' })
            console.log(response)
            if (response?.data) {
                setRequireOnboarding(false)
            }

            setIsLoading(false);
        }

        if (userAddress) {
            getUserFetch();
        }
    })

    if (isLoading) return <div className="w-screen h-scree">
        <Loader fillScreen={true} />
    </div>

    return <>
        {!requireOnboarding && <Dashboard />}
        {requireOnboarding && <OnBoard />}
    </>
}
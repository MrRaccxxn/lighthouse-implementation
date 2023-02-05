import { useContext } from "react";
import { Dashboard } from ".";
import { DashboardContext } from "./context/DashboardContext";
import { OnBoard } from "./sections/OnBoard";
import { DashboardContextInterface } from "./types/context/dashboardContext";

export const RedirectionDashboard = () => {
    const { requireOnboarding } = useContext(DashboardContext) as DashboardContextInterface;

    return <>
        {!requireOnboarding && <Dashboard />}
        {requireOnboarding && <OnBoard />}
    </>
}
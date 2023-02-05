import { Dashboard } from "@/modules/dashboard";
import { DashboardProvider } from "@/modules/dashboard/context/DashboardContext";
import { RedirectionDashboard } from "@/modules/dashboard/redirection";

export default function DashboardPage() {
    return (
        <DashboardProvider>
            <RedirectionDashboard />
        </DashboardProvider>
    );
}
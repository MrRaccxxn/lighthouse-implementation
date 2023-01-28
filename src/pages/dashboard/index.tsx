import { Dashboard } from "@/modules/dashboard";
import { DashboardProvider } from "@/modules/dashboard/context/DashboardContext";

export default function DashboardPage() {
    return (
        <DashboardProvider>
            <Dashboard />
        </DashboardProvider>
    );
}
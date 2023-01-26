import { createContext, SetStateAction, useState } from 'react';
import { DashboardContextInterface, DashboardSectionType } from '../types/context/dashboardContext';

export const DashboardContext = createContext<DashboardContextInterface | null>(null)

export const DashboardProvider = ({ children }: { children: JSX.Element }) => {
    const [dashboardSection, setDashboardSection] = useState<DashboardSectionType>(DashboardSectionType.Summary);

    return <DashboardContext.Provider value={{ dashboardSection, setDashboardSection }}>
        {children}
    </DashboardContext.Provider>
}
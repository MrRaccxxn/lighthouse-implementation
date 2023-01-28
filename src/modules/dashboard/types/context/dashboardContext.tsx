
import { Dispatch, SetStateAction } from "react";

export interface DashboardContextInterface {
    dashboardSection: DashboardSectionType;
    setDashboardSection: Dispatch<SetStateAction<DashboardSectionType>>;
}

export enum DashboardSectionType {
    Summary = 'Summary',
    FindPapers = 'Find Papers',
    Messages = 'Messages',
    Projects = 'Projects',
    Settings = 'Settings',
}
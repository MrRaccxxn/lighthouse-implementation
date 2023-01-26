import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import { DashboardContextInterface, DashboardSectionType } from "../types/context/dashboardContext";
import { MessageSection } from "./MessageSection";
import { Projects } from "./Projects";
import { ResumeSection } from "./ResumeSection";

export const DashboardSection = () => {
    const { dashboardSection } = useContext(DashboardContext) as DashboardContextInterface;;

    return <>
        {dashboardSection === DashboardSectionType.Summary && <ResumeSection />}
        {dashboardSection === DashboardSectionType.Messages && <MessageSection />}
        {dashboardSection === DashboardSectionType.Projects && <Projects />}
    </>
}
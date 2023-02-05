import { useContext } from "react"
import { ProjectBox } from "../../../components/ProjectBox"
import { ProjectSectionContext } from "../../../context/ProjectSectionContext"
import { ProjectSectionContextInterface, ProjectSectionStateType } from "../../../types/context/registerProjectFormContext"

export const MyProjects = () => {
    const { setProjectSectionState } = useContext(ProjectSectionContext) as ProjectSectionContextInterface

    return <div className="ml-60 max-h-screen overflow-auto">
        <div className="px-6 py-8">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-3xl p-8 mb-5">
                    <div className="flex flex-row items-center justify-between">
                        <h1 className="text-3xl font-bold my-auto">My Projects</h1>
                        <button className="btn btn-outline" onClick={() => setProjectSectionState(ProjectSectionStateType.UploadMetadata)}><span className="text-xl">+</span>&nbsp;&nbsp;New Project </button>
                    </div>

                    <hr className="my-10" />

                    <div className="grid grid-cols-2 gap-y-8 gap-x-16">
                        <ProjectBox />
                        <ProjectBox />
                        <ProjectBox />
                        <ProjectBox />
                    </div>
                </div>
            </div>
        </div>
    </div>
}